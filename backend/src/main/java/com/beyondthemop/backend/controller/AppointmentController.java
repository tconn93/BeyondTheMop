package com.beyondthemop.backend.controller;

import com.beyondthemop.backend.entity.Appointment;
import com.beyondthemop.backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    private final AppointmentService service;

    @Autowired
    public AppointmentController(AppointmentService service){
        this.service=service;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Appointment>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getById(@PathVariable Long id){
        return ResponseEntity.ok(service.getById(id));
    }
    @CrossOrigin
    @PostMapping
    public ResponseEntity<Appointment> save(@RequestBody Appointment appointment){
        return ResponseEntity.ok(service.save(appointment));
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        service.deleteById(id);
        return ResponseEntity.ok("deleted");
    }
}
