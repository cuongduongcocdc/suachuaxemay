package com.grokonez.jwtauthentication.model;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "bill")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "id_customer")
    private long idCustomer;

    @Column(name = "total_price")
    private float totalPrice;

    @Column
    private int status;

    @NotBlank
    @Size(min = 3, max = 50)
    private String license_plates;

    @Column(name = "create_date")
    private Date create_date;

    @Column
    private long id_employee;

    public Bill() {
    }

    public Bill( long idCustomer, float totalPrice, int status, String license_plates, Date create_date, long id_employee) {
        this.idCustomer = idCustomer;
        this.totalPrice = totalPrice;
        this.status = status;
        this.license_plates = license_plates;
        this.create_date = create_date;
        this.id_employee = id_employee;
    }

    public int getStatus() {
        return status;
    }

    public String getLicense_plates() {
        return license_plates;
    }

    public void setLicense_plates(String license_plates) {
        this.license_plates = license_plates;
    }

    public long getId_bill() {
        return id_employee;
    }

    public void setId_bill(long id_bill) {
        this.id_employee = id_bill;
    }

    public String getLicensePlates() {
        return license_plates;
    }

    public void setLicensePlates(String licensePlates) {
        this.license_plates = licensePlates;
    }

    public int isStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(long idCustomer) {
        this.idCustomer = idCustomer;
    }

    public float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Date getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Date create_date) {
        this.create_date = create_date;
    }
}
