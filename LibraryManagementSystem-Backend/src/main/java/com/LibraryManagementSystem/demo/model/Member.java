package com.LibraryManagementSystem.demo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@Table(name="members")
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Student name is required")
    private String studentName;

    @NotBlank(message = "Roll number is required")
    private String rollNo;

    @NotBlank(message = "Phone number is required")
    private String branch;

    @NotBlank(message = "Phone number is required")
    @Pattern(
            regexp = "\\d{10}",
            message="Phone number must contain 10 digits"
    )
    private String phone;

    @NotBlank(message = "Email is required")
    @Email(message = "Please enter a valid email")
    private String email;
}
