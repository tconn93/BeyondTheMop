package com.beyondthemop.backend.repo;

import com.beyondthemop.backend.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment,Long> {

    List<Appointment> dateBetween(Integer date, Integer date2);
}
