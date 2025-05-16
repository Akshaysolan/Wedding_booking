package com.example.demo.controller;

import com.example.demo.model.InquirySubmission;
import com.example.demo.repository.InquiryRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inquiry")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", exposedHeaders = "Authorization")
public class InquiryController {

    private final InquiryRepository repository;

    public InquiryController(InquiryRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<InquirySubmission> submitInquiry(@RequestBody InquirySubmission inquiry) {
        InquirySubmission savedInquiry = repository.save(inquiry);
        return ResponseEntity.ok(savedInquiry);
    }

    @GetMapping("/all")
    public ResponseEntity<List<InquirySubmission>> getAllInquiries() {
        return ResponseEntity.ok(repository.findAll());
    }
}
