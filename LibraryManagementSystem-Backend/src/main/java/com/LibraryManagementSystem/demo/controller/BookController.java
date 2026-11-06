package com.LibraryManagementSystem.demo.controller;

import com.LibraryManagementSystem.demo.model.Book;
import com.LibraryManagementSystem.demo.service.BookService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/books")
public class BookController {
    private final BookService bookService;
    public BookController(BookService bookService){
        this.bookService=bookService;
    }

    @GetMapping
    public List<Book> getAllBooks() {

        return bookService.getAllBooks();
    }
    @PostMapping
    public ResponseEntity<Book> addBook(@Valid @RequestBody Book book){
        Book book2=bookService.addBook(book);

        return new ResponseEntity<>(book2, HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id){

        return bookService.getBookById(id);
    }
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable Long id){
        return bookService.deleteBook(id);
    }
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id,@Valid @RequestBody Book book){
        return bookService.updateBook(id,book);
    }


    @GetMapping("/search/author/{author}")
    public List<Book> searchBooksByAuthor(@PathVariable String author){
        return bookService.searchBooksByAuthor(author);
    }
    @GetMapping("/search/title/{title}")
    public List<Book> searchBookByTitle(@PathVariable String title){

        return bookService.searchBookByTitle(title);
    }

    @GetMapping("/count")
    public Long countBooks(){
        return bookService.countBooks();
    }

    @GetMapping("/available/{id}")
    public boolean isBookAvailable(@PathVariable Long id){
        return bookService.isBookAvailable(id);
    }
}
