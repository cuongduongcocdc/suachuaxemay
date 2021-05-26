package com.grokonez.jwtauthentication.repository;

import com.grokonez.jwtauthentication.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepository extends JpaRepository<Bill,Long> {

    @Query(value = "Select id from bill where status = 0 and id_customer=?1 and license_plates =?2",nativeQuery = true)
    public int getIdMax(int idCustomer,String licensePlates);
}
