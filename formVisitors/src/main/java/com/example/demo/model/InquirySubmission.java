package com.example.demo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class InquirySubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Bride's name is required")
    private String brideName;

    @NotBlank(message = "Groom's name is required")
    private String groomName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    private String phone;

    @NotBlank(message = "Wedding date is required")
    private String weddingDate;

    private int guestCount;

    @NotBlank(message = "Event type is required")
    private String eventType;

    private String additionalInfo;

    @NotBlank(message = "Package interest is required")
    private String packageInterest;
}
