package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Packages;
import com.example.demo.service.PackageService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", exposedHeaders = "Authorization")
public class PackageController {

    @Autowired
    private PackageService packageService;

    @PostMapping
    public Packages createPackage(@RequestBody Packages newPackage) {
        return packageService.createPackage(newPackage);
    }

    @GetMapping
    public List<Packages> getAllPackages() {
        return packageService.getAllPackages();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Packages> updatePackage(@PathVariable Long id, @RequestBody Packages updatedPackage) {
        Optional<Packages> existingPackage = packageService.getPackageById(id);
        if (existingPackage.isPresent()) {
            Packages pkg = existingPackage.get();
            pkg.setName(updatedPackage.getName());
            pkg.setPrice(updatedPackage.getPrice());
            pkg.setBestFor(updatedPackage.getBestFor());
            pkg.setIncludes(updatedPackage.getIncludes());

            packageService.updatePackage(id, pkg); 
            return ResponseEntity.ok(pkg);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePackage(@PathVariable Long id) {
        Optional<Packages> existingPackage = packageService.getPackageById(id);
        if (existingPackage.isPresent()) {
            packageService.deletePackage(id);
            return ResponseEntity.ok().body("Package deleted successfully!");
        }
        return ResponseEntity.notFound().build();
    }
}
