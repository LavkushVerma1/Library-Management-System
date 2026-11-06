package com.LibraryManagementSystem.demo.controller;


import com.LibraryManagementSystem.demo.model.BorrowRecord;
import com.LibraryManagementSystem.demo.service.BorrowRecordService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/borrow")
@CrossOrigin
public class BorrowRecordController {
    private final BorrowRecordService borrowRecordService;
    public BorrowRecordController(BorrowRecordService borrowRecordService) {
        this.borrowRecordService = borrowRecordService;
    }
        @PostMapping
        public BorrowRecord borrowBook(
                @RequestParam Long bookId,
                @RequestParam Long memberId,
                @RequestParam String dueDate
                ){
            return borrowRecordService.borrowBook(bookId,memberId, LocalDate.parse(dueDate));
        }

        @PutMapping("/{id}/return")
    public BorrowRecord returnBook(@PathVariable Long id){

        return borrowRecordService.returnBook(id);
        }

        @GetMapping
        public List<BorrowRecord> getAllBorrowRecord(){
            return borrowRecordService.getAllBorrowRecord();
        }


}
