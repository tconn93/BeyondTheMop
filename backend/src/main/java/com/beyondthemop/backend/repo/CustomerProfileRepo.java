package com.beyondthemop.backend.repo;

import com.beyondthemop.backend.entity.CustomerProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerProfileRepo extends JpaRepository<CustomerProfile,String> {

}
