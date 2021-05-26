package com.grokonez.jwtauthentication.controller;


import com.grokonez.jwtauthentication.dto.BillCustomer;
import com.grokonez.jwtauthentication.model.Bill;
import com.grokonez.jwtauthentication.model.Customer;
import com.grokonez.jwtauthentication.repository.BillDetailRespository;
import com.grokonez.jwtauthentication.repository.BillRepository;
import com.grokonez.jwtauthentication.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/bill")
public class BillController {

    @Autowired
    BillRepository billRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BillDetailRespository billDetailRespository;

    @PostMapping("/addbill")
    public void addBill(@RequestBody BillCustomer billCustomer) {
        if (billCustomer.getCheck() == 1) {
            Customer customer = new Customer(billCustomer.getNameCustomer(),
                    billCustomer.getPhoneCustomer(),
                    "Quoc Oai", billCustomer.getLicensePlates(),
                    billCustomer.getPriceBill()
            );
            customerRepository.save(customer);
        }
        int idCustomer = customerRepository.idCustomer(billCustomer.getLicensePlates(), billCustomer.getNameCustomer());
        Bill bill = new Bill(idCustomer,billCustomer.getPriceBill(),0,billCustomer.getLicensePlates(),new Date(),billCustomer.getIdEmployee());
        billRepository.save(bill);
        int idBill = billRepository.getIdMax(idCustomer,billCustomer.getLicensePlates());
        for(int i=0;i<billCustomer.getBillDetailList().size();i++){
            billCustomer.getBillDetailList().get(i).setBillId(idBill);
        }
        billDetailRespository.saveAll(billCustomer.getBillDetailList());
    }
}
