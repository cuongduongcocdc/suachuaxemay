package com.grokonez.jwtauthentication.model;


import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min=3, max = 50)
    private String name;

    @NotBlank
    @Size(min=3, max = 50)
    private int phone;

    @NotBlank
    @Size(min=3, max = 50)
    private String address;

    @NaturalId
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @Column
    private boolean status;

    @NotBlank
    private int level;

    public Employee() {
    }

    public Employee(Long id, String name, int phone, String address, String email, boolean status, int level) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.status = status;
        this.level = level;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
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

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }
}
