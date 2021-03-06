package com.grokonez.jwtauthentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRespository extends JpaRepository<Product,Long> {
    @Override
    List<Product> findAll();
}