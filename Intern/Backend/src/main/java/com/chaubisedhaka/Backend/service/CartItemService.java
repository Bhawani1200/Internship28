package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.CartItemException;
import com.chaubisedhaka.Backend.exception.UserException;
import com.chaubisedhaka.Backend.model.Cart;
import com.chaubisedhaka.Backend.model.CartItem;
import com.chaubisedhaka.Backend.model.Product;

public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);

    public CartItem updateCartItem(Long userId,Long id,CartItem cartItem)throws CartItemException, UserException;

    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);

    public void removeCartItem(Long userId,Long cartItemId)throws CartItemException;

    public CartItem findCartItemById(Long cartItemId)throws CartItemException;


}
