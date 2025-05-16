package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Packages;

public interface PackageRepository extends JpaRepository<Packages, Long> {
}

