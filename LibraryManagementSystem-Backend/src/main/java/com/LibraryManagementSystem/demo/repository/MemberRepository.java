package com.LibraryManagementSystem.demo.repository;

import com.LibraryManagementSystem.demo.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {
}
