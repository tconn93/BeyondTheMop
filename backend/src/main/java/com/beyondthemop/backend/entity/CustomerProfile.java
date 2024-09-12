package com.beyondthemop.backend.entity;


import jakarta.persistence.*;

@Entity
public class CustomerProfile {

    @Id
    private String email;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private boolean isClient;


    @Column
    private String address;

    @Column
    private String address2;

    @Column
    private String city;


    @Column
    private String state;

    @Column
    private Integer zip;


    @Column
    private Integer deepClean;

    @Column
    private Integer basicClean;




    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Integer getZip() {
        return zip;
    }

    public void setZip(Integer zip) {
        this.zip = zip;
    }

    public Integer getDeepClean() {
        return deepClean;
    }

    public void setDeepClean(Integer deepClean) {
        this.deepClean = deepClean;
    }

    public Integer getBasicClean() {
        return basicClean;
    }

    public void setBasicClean(Integer basicClean) {
        this.basicClean = basicClean;
    }

    public boolean isClient() {
        return isClient;
    }

    public void setClient(boolean client) {
        isClient = client;
    }
}
