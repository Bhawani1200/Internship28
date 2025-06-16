package com.chaubisedhaka.Backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String description;

    private int price;

    @Column(name="discount_persent")
    private int discountPersent;

    @Column(name="discount_price")
    private int discountedPrice;

    @Column(name="quantity")
    private int quantity;

    @Column(name="brand")
    private String brand;

    @Column(name="color")
    private String color;

    @Column(name="image_url")
    private String imageUrl;

    @Embedded
    @ElementCollection
    @Column(name="sizes")
    private Set<Size>sizes=new HashSet<>();

    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Rating>rating=new ArrayList();

    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Review>review=new ArrayList();

    @Column(name="num_ratings")
    private int numRatings;

    @ManyToOne()
    @JoinColumn(name="category_id")
    private Category category;

    private LocalDateTime createdAt;

    public Product(){

    }

    public Product(Long id, String title, String description, int price, int discountPersent, int discountedPrice, int quantity, String brand, String color, String imageUrl, Set<Size> sizes, List<Rating> rating, List<Review> review, int numRatings, Category category, LocalDateTime createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPersent = discountPersent;
        this.discountedPrice = discountedPrice;
        this.quantity = quantity;
        this.brand = brand;
        this.color = color;
        this.imageUrl = imageUrl;
        this.sizes = sizes;
        this.rating = rating;
        this.review = review;
        this.numRatings = numRatings;
        this.category = category;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public int getPrice() {
        return price;
    }

    public int getDiscountPersent() {
        return discountPersent;
    }

    public int getDiscountedPrice() {
        return discountedPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getBrand() {
        return brand;
    }

    public String getColor() {
        return color;
    }

    public Set<Size> getSizes() {
        return sizes;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public List<Rating> getRating() {
        return rating;
    }

    public List<Review> getReview() {
        return review;
    }

    public int getNumRatings() {
        return numRatings;
    }

    public Category getCategory() {
        return category;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setDiscountPersent(int discountPersent) {
        this.discountPersent = discountPersent;
    }

    public void setDiscountedPrice(int discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setSizes(Set<Size> sizes) {
        this.sizes = sizes;
    }

    public void setRating(List<Rating> rating) {
        this.rating = rating;
    }

    public void setReview(List<Review> review) {
        this.review = review;
    }

    public void setNumRatings(int numRatings) {
        this.numRatings = numRatings;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
