package com.beyondthemop.backend.repo;

import com.beyondthemop.backend.entity.NewCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewCustomerRepo extends JpaRepository<NewCustomer,String> {
}
