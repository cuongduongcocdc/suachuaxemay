package com.grokonez.jwtauthentication.repository;


import com.grokonez.jwtauthentication.model.BillDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillDetailRespository extends JpaRepository<BillDetail,Long> {
}
