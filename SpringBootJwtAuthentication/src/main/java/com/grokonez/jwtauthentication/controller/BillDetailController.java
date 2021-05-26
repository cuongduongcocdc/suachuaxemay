package com.grokonez.jwtauthentication.controller;


import com.grokonez.jwtauthentication.model.BillDetail;
import com.grokonez.jwtauthentication.repository.BillDetailRespository;
import com.grokonez.jwtauthentication.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/billdetail")
public class BillDetailController {

    @Autowired
    BillDetailRespository billDetailRespository;

    @Autowired
    BillRepository billRepository;

    public void addListDetail(@RequestBody List<BillDetail> billDetailList) {


    }
}
