package com.grokonez.jwtauthentication.repository;

import com.grokonez.jwtauthentication.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRespository extends JpaRepository<Employee,Long> {

    @Query(value = "select * from employee where status =1",nativeQuery = true)
    public List<Employee> getAllByStatus();
}
