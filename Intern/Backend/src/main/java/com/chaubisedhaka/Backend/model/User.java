package com.chaubisedhaka.Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String Password;

    private String role;

    private String mobile;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Address>address=new ArrayList();

    @Embedded
    @ElementCollection
    @CollectionTable(name="payment_information",joinColumns = @JoinColumn(name="user_id"))
    private List<PaymentInformation>paymentInformation=new ArrayList<>();

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Rating>ratings=new ArrayList<>();


    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Review>reviews=new ArrayList<>();

    public User(){

    }

    public User(String password) {
        Password = password;
    }

    public User(Long id, String firstName, String email, String lastName, String mobile, String role, String password, List<Address> address, List<PaymentInformation> paymentInformation, List<Rating> ratings, List<Review> reviews) {
        this.id = id;
        this.firstName = firstName;
        this.email = email;
        this.lastName = lastName;
        this.mobile = mobile;
        this.role = role;
        Password = password;
        this.address = address;
        this.paymentInformation = paymentInformation;
        this.ratings = ratings;
        this.reviews = reviews;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return Password;
    }

    public String getRole() {
        return role;
    }

    public String getMobile() {
        return mobile;
    }

    public List<Address> getAddress() {
        return address;
    }

    public List<PaymentInformation> getPaymentInformation() {
        return paymentInformation;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setAddress(List<Address> address) {
        this.address = address;
    }

    public void setPaymentInformation(List<PaymentInformation> paymentInformation) {
        this.paymentInformation = paymentInformation;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
