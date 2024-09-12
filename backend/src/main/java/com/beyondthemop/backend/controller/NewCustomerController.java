package com.beyondthemop.backend.controller;

import com.beyondthemop.backend.entity.NewCustomer;
import com.beyondthemop.backend.service.NewCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/newCustomer")
public class NewCustomerController {

    private final NewCustomerService service;

    @Autowired
    public NewCustomerController(NewCustomerService service){
        this.service=service;
    }
    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<NewCustomer>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }
    @CrossOrigin
    @GetMapping("/{email}")
    public ResponseEntity<NewCustomer> getById(@PathVariable String email){
        return ResponseEntity.ok(service.getById(email));
    }
    @CrossOrigin
    @PostMapping
    public ResponseEntity<NewCustomer> save(@RequestBody NewCustomer customer){
        return ResponseEntity.ok(service.save(customer));
    }
    @CrossOrigin
    @DeleteMapping("/{email}")
    public ResponseEntity<String> delete (@PathVariable String email){
        service.deleteById(email);
        return ResponseEntity.ok("deleted");
    }

}
