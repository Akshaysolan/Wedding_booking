package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Packages;
import com.example.demo.repository.PackageRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PackageService {
    @Autowired
    private PackageRepository packageRepository;

    public List<Packages> getAllPackages() {
        return packageRepository.findAll();
    }

    public Packages updatePackage(Long id, Packages updatedPackage) {
        return packageRepository.findById(id).map(pkg -> {
            pkg.setPrice(updatedPackage.getPrice());
            return packageRepository.save(pkg);
        }).orElseThrow(() -> new RuntimeException("Package not found"));
    }
    
    public Packages createPackage(Packages newPackage) {
        return packageRepository.save(newPackage);
    }

    public Optional<Packages> getPackageById(Long id) {
        return packageRepository.findById(id);
    }
    
    public void deletePackage(Long id) {
        packageRepository.deleteById(id);
    }
}
