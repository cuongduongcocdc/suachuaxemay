package com.grokonez.jwtauthentication.repository;

import com.grokonez.jwtauthentication.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long> {

    @Query(value = "select id from customer where license_plates =?1 and name =?2",nativeQuery = true)
    public int idCustomer (String bienSoXe,String name);

    

}
