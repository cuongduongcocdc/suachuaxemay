package com.grokonez.jwtauthentication.model;


import javax.persistence.*;

@Entity
@Table(name = "billdetail")

public class BillDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private float price;

    @Column(name = "name_product")
    private String nameProduct;

    @Column
    private int quantity;

    @Column
    private boolean status;

    @Column(name = "bill_id")
    private long billId;

    public BillDetail() {
    }

    public BillDetail(long id, String name, float price, String nameProduct, int quantity, boolean status,long billId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.nameProduct = nameProduct;
        this.quantity = quantity;
        this.status = status;
        this.billId = billId;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public long getBillId() {
        return billId;
    }

    public void setBillId(long billId) {
        this.billId = billId;
    }
}
