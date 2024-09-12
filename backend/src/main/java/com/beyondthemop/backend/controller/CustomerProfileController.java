package com.beyondthemop.backend.controller;

import com.beyondthemop.backend.entity.CustomerProfile;
import com.beyondthemop.backend.service.CustomerProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerProfileController {

    private final CustomerProfileService service;

    @Autowired
    public CustomerProfileController(CustomerProfileService service){
        this.service=service;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<CustomerProfile>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }
    @CrossOrigin
    @GetMapping("/{email}")
    public ResponseEntity<CustomerProfile> getById(@PathVariable String email){
        return ResponseEntity.ok(service.getById(email));
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<CustomerProfile> save(@RequestBody CustomerProfile profile){
        return ResponseEntity.ok(service.save(profile));
    }
    @CrossOrigin
    @DeleteMapping("/{email}")
    public ResponseEntity<String> delete(@PathVariable String email){
        service.deleteById(email);
        return ResponseEntity.ok("deleted");
    }

}
