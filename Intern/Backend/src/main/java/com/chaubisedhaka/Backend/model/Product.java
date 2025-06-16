package com.chaubisedhaka.Backend.model;

import jakarta.persistence.*;

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
}
