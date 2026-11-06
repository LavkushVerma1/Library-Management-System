package com.LibraryManagementSystem.demo.repository;

import com.LibraryManagementSystem.demo.model.BorrowRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowRecordRepository extends JpaRepository<BorrowRecord,Long> {
}
