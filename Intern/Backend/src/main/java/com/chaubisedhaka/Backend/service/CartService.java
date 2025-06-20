package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Cart;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.request.AddItemRequest;

public interface CartService {

    public Cart createCart(User user);

    public String addCartItem(Long userId, AddItemRequest addItemRequest) throws ProductException;

    public Cart findUserCart(Long userId);

}
