package com.grokonez.jwtauthentication.model;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min=3, max = 50)
    private String name;

    @NotBlank
    @Size(min=3, max = 50)
    private String phone;

    @NotBlank
    @Size(min=3, max = 50)
    private String address;

    @NotBlank
    @Size(min=3, max = 50)
    private String license_plates;

    private float money_hoarding;

    public Customer(Long id) {
        this.id = id;
    }

    public Customer(String name, String phone, String address, String licensePlates, float moneyHoarding) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.license_plates = licensePlates;
        this.money_hoarding = moneyHoarding;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLicensePlates() {
        return license_plates;
    }

    public void setLicensePlates(String licensePlates) {
        this.license_plates = licensePlates;
    }

    public float getMoneyHoarding() {
        return money_hoarding;
    }

    public void setMoneyHoarding(float moneyHoarding) {
        this.money_hoarding = moneyHoarding;
    }
}
