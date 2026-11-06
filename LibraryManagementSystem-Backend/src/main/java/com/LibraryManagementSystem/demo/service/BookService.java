package com.LibraryManagementSystem.demo.service;

import com.LibraryManagementSystem.demo.model.Book;
import com.LibraryManagementSystem.demo.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;
    public BookService(BookRepository bookRepository){
        this.bookRepository=bookRepository;
    }

    public Book addBook(Book book) {
        book.setAvailable(book.getQuantity());
        return bookRepository.save(book);
    }


    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public String deleteBook(Long id) {
        bookRepository.deleteById(id);
        return "Book Deleted Successfully";
    }

    public Book updateBook(Long id, Book book) {
        Book exitingBook=bookRepository.findById(id).orElse(null);
        if(exitingBook==null){
            return null;
        }

        int oldQuantity=exitingBook.getQuantity();
        int oldAvailable=exitingBook.getAvailable();
        int borrowedBooks=oldQuantity-oldAvailable;
        int newQuantity=book.getQuantity();
        if(newQuantity<borrowedBooks){
            throw new RuntimeException("Quantity cannot be less than currently borrowed books");
        }
        int newAvailable=newQuantity-borrowedBooks;

        exitingBook.setTitle(book.getTitle());
        exitingBook.setAuthor(book.getAuthor());
        exitingBook.setIsbn(book.getIsbn());
        exitingBook.setCategory(book.getCategory());
        exitingBook.setQuantity(newQuantity);
        exitingBook.setAvailable(newAvailable);
        return bookRepository.save(exitingBook);
    }



    public List<Book> searchBooksByAuthor(String author) {
        return bookRepository.findByAuthorContainingIgnoreCase(author);
    }

    public List<Book> searchBookByTitle(String title) {
        return bookRepository.findByTitleContainingIgnoreCase(title);
    }



    public Long countBooks() {
        return bookRepository.count();
    }



    public boolean isBookAvailable(Long id) {
        Book book=bookRepository.findById(id).orElse(null);
        if(book==null){
            return false;
        }
        return book.getAvailable()>0;
    }

}
