package com.grokonez.jwtauthentication.controller;

import com.grokonez.jwtauthentication.model.Customer;
import com.grokonez.jwtauthentication.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @PostMapping("/add")
    public void addCustomer(@RequestBody Customer customer) {
        customerRepository.save(customer);
    }
}
