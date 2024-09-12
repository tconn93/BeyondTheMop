package com.beyondthemop.backend.service;

import com.beyondthemop.backend.entity.NewCustomer;
import com.beyondthemop.backend.repo.NewCustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewCustomerService {

    private final NewCustomerRepo repo;

    @Autowired
    public NewCustomerService(NewCustomerRepo repo){
        this.repo=repo;
    }

    public List<NewCustomer> getAll(){
        return repo.findAll();
    }

    public NewCustomer getById(String email){
        return repo.findById(email).orElseThrow();
    }

    public NewCustomer save(NewCustomer customer){
        return repo.saveAndFlush(customer);
    }

    public void deleteById(String email){
        repo.deleteById(email);
    }
}
