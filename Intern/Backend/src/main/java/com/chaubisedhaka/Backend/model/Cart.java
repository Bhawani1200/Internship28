package com.chaubisedhaka.Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name="user_id",nullable = false)
    private User user;


    @JsonIgnoreProperties("cart")
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Column(name="cart_items")
    private List<CartItem> cartItems=new ArrayList<>();

    @Column(name="total_price")
    private double totalPrice;

    @Column(name="total_item")
    private int totalItem;

    private int totalDiscountedPrice;

    private int discount;


}
