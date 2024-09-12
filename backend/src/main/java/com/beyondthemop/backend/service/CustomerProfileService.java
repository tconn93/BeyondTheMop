package com.beyondthemop.backend.service;

import com.beyondthemop.backend.entity.CustomerProfile;
import com.beyondthemop.backend.repo.CustomerProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerProfileService {

    private final CustomerProfileRepo repo;

    @Autowired
    public CustomerProfileService(CustomerProfileRepo repo){
        this.repo=repo;
    }


    public CustomerProfile save(CustomerProfile profile){
        profile.setEmail(profile.getEmail().toUpperCase());
        return repo.saveAndFlush(profile);
    }

    public CustomerProfile getById(String id){
        return repo.findById(id.toUpperCase()).orElseThrow();
    }

    public List<CustomerProfile> getAll(){
        return repo.findAll();
    }

    public void deleteById(String id){
     repo.deleteById(id.toUpperCase());
    }
}
