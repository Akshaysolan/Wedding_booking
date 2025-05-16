package com.example.demo.service;

import com.example.demo.model.InquirySubmission;
import com.example.demo.repository.InquiryRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class InquiryService {
    private final InquiryRepository inquiryRepository;

    public InquiryService(InquiryRepository inquiryRepository) {
        this.inquiryRepository = inquiryRepository;
    }

    public InquirySubmission saveInquiry(InquirySubmission submission) {
        return inquiryRepository.save(submission);
    }
    
    public List<InquirySubmission> getAllInquiries() {
        return inquiryRepository.findAll();
    }
}
