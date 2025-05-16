package com.example.demo.controller;

import com.example.demo.model.ContactSubmission;
import com.example.demo.service.ContactService;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", exposedHeaders = "Authorization")
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactSubmission> submitContact(@Valid @RequestBody ContactSubmission submission) {
        ContactSubmission savedSubmission = contactService.saveContact(submission);
        return ResponseEntity.ok(savedSubmission);
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<ContactSubmission>> getAllContacts() {
        List<ContactSubmission> contacts = contactService.getAllContacts();
        return ResponseEntity.ok(contacts);
    }

}
