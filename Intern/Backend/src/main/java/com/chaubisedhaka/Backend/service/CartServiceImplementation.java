package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Cart;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.repository.CartRepository;
import com.chaubisedhaka.Backend.request.AddItemRequest;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImplementation implements CartService {
    private CartRepository cartRepository;
    private CartItemService cartItemService;

    @Override
    public Cart createCart(User user) {
        return null;
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest addItemRequest) throws ProductException {
        return "";
    }

    @Override
    public Cart findUserCart(Long userId) {
        return null;
    }
}
