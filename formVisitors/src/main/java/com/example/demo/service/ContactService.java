package com.example.demo.service;

import com.example.demo.model.ContactSubmission;
import com.example.demo.repository.ContactRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ContactService {
    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactSubmission saveContact(ContactSubmission submission) {
        return contactRepository.save(submission);
    }
    
    public List<ContactSubmission> getAllContacts() {
        return contactRepository.findAll();
    }

}
