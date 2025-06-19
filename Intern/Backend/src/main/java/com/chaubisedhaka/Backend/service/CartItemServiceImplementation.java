package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.CartItemException;
import com.chaubisedhaka.Backend.exception.UserException;
import com.chaubisedhaka.Backend.model.Cart;
import com.chaubisedhaka.Backend.model.CartItem;
import com.chaubisedhaka.Backend.model.Product;

public class CartItemServiceImplementation implements CartItemService{
    @Override
    public CartItem createCartItem(CartItem cartItem) {
        return null;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
        return null;
    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
        return null;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException {

    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        return null;
    }
}
