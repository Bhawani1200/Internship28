package com.chaubisedhaka.Backend.model;

import jakarta.persistence.*;

@Entity
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @id
    @ManyToOne
    private Cart cart;

    private Product product;

    private String size;

    private int quantity;

    private Integer price;

    private Integer discountedPrice;

    private Long userId;


}
