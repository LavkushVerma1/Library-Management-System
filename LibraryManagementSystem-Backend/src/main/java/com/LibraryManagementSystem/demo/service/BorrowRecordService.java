package com.LibraryManagementSystem.demo.service;


import com.LibraryManagementSystem.demo.model.Book;
import com.LibraryManagementSystem.demo.model.BorrowRecord;
import com.LibraryManagementSystem.demo.model.Member;
import com.LibraryManagementSystem.demo.repository.BookRepository;
import com.LibraryManagementSystem.demo.repository.BorrowRecordRepository;
import com.LibraryManagementSystem.demo.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class BorrowRecordService {
    private final MemberRepository memberRepository;
    private final BorrowRecordRepository borrowRecordRepository;
    private final BookRepository bookRepository;
    public BorrowRecordService(
            BorrowRecordRepository borrowRecordRepository,
            MemberRepository memberRepository,
            BookRepository bookRepository){
        this.borrowRecordRepository=borrowRecordRepository;
        this.memberRepository=memberRepository;
        this.bookRepository=bookRepository;
    }
    //borrow a book
    @Transactional
    public BorrowRecord borrowBook(
            Long bookId,
            Long memberId,
            LocalDate dueDate){
        Book book=bookRepository.findById(bookId).orElseThrow(()->new RuntimeException("Book Not Found"));
        Member member=memberRepository.findById(memberId).orElseThrow(()->new RuntimeException("Member Not Found"));
        if(book.getAvailable()<=0){
            throw new RuntimeException("Book is not available");
        }
        BorrowRecord record=new BorrowRecord();

        record.setBook(book);
        record.setMember(member);
        record.setBorrowDate(LocalDate.now());
        record.setDueDate(dueDate);
        record.setStatus("Borrowed");
        book.setAvailable(book.getAvailable()-1);
        bookRepository.save(book);
        return borrowRecordRepository.save(record);
    }
    @Transactional
    public BorrowRecord returnBook(Long id) {
        BorrowRecord record=borrowRecordRepository.findById(id).orElseThrow(()->new RuntimeException("Borrow record not found"));
        if(record.getStatus().equals("Returned")){
            throw new RuntimeException("Book is already returned");

        }
        record.setStatus("Returned");
        record.setReturnDate(LocalDate.now());

        Book book=record.getBook();
        book.setAvailable(book.getAvailable()+1);
        bookRepository.save(book);
        return borrowRecordRepository.save(record);
    }

    public List<BorrowRecord> getAllBorrowRecord() {
        return borrowRecordRepository.findAll();
    }
}
