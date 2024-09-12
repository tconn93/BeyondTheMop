package com.beyondthemop.backend.service;

import com.beyondthemop.backend.entity.Appointment;
import com.beyondthemop.backend.repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepo repo;

    @Autowired
    public AppointmentService(AppointmentRepo repo){
        this.repo=repo;
    }


    public Appointment save(Appointment app){
        app.getCustomer().setEmail(app.getCustomer().getEmail().toUpperCase());
        return repo.saveAndFlush(app);
    }

    public Appointment getById(Long id){
        return repo.findById(id).orElseThrow();
    }

    public List<Appointment> getAll(){
        return repo.findAll();
    }

    public void deleteById(Long id){
        repo.deleteById(id);
    }
}
