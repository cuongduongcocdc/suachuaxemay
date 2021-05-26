package com.grokonez.jwtauthentication.dto;


import com.grokonez.jwtauthentication.model.BillDetail;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class BillCustomer {


    @NotBlank
    private String nameCustomer;
    @NotBlank
    private String phoneCustomer;
    @NotBlank
    private String licensePlates;
    @NotBlank
    private int idEmployee;
    @NotBlank
    private float priceBill;
    @NotBlank
    private int check;
    @NotBlank
    private List<BillDetail> billDetailList;


    public BillCustomer() {
    }

    public BillCustomer(String nameCustomer, String phoneCustomer, String licensePlates, int idEmployee, float priceBill, int check, List<BillDetail> billDetailList) {
        this.nameCustomer = nameCustomer;
        this.phoneCustomer = phoneCustomer;
        this.licensePlates = licensePlates;
        this.idEmployee = idEmployee;
        this.priceBill = priceBill;
        this.check = check;
        this.billDetailList = billDetailList;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getPhoneCustomer() {
        return phoneCustomer;
    }

    public int getCheck() {
        return check;
    }

    public void setCheck(int check) {
        this.check = check;
    }

    public void setPhoneCustomer(String phoneCustomer) {
        this.phoneCustomer = phoneCustomer;
    }

    public String getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(String licensePlates) {
        this.licensePlates = licensePlates;
    }

    public int getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(int idEmployee) {
        this.idEmployee = idEmployee;
    }

    public float getPriceBill() {
        return priceBill;
    }

    public void setPriceBill(float priceBill) {
        this.priceBill = priceBill;
    }

    public List<BillDetail> getBillDetailList() {
        return billDetailList;
    }

    public void setBillDetailList(List<BillDetail> billDetailList) {
        this.billDetailList = billDetailList;
    }
}
