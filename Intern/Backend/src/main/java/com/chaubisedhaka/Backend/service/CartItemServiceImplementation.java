package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.CartItemException;
import com.chaubisedhaka.Backend.exception.UserException;
import com.chaubisedhaka.Backend.model.Cart;
import com.chaubisedhaka.Backend.model.CartItem;
import com.chaubisedhaka.Backend.model.Product;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.repository.CartItemRepository;
import com.chaubisedhaka.Backend.repository.CartRepository;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemServiceImplementation implements CartItemService{
    private CartItemRepository cartItemRespository;
    private UserService userService;
    private CartRepository cartRepository;
    public CartItemServiceImplementation(CartItemRepository cartItemRespository,UserService userService,CartRepository cartRepository){
        this.cartItemRespository=cartItemRespository;
        this.userService=userService;
        this.cartRepository=cartRepository;
    }

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());

        CartItem createdCartItem=cartItemRespository.save(cartItem);
        return createdCartItem;

    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException, ExecutionControl.UserException {
        CartItem item=findCartItemById(id);
        User user=userService.findUserById(item.getUserId());
        if(user.getId().equals(userId)){
            item.setQuantity(cartItem.getQuantity());
            item.setPrice(item.getQuantity()*item.getProduct().getPrice());
            item.setDiscountedPrice(item.getProduct().getDiscountedPrice()*item.getQuantity());

        }
        return cartItemRespository.save(item);
    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
     CartItem cartItem=cartItemRespository.isCartItemExist(cart,product,size,userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId, String jwt) throws CartItemException, ExecutionControl.UserException {
        CartItem cartItem=findCartItemById(cartItemId);
     User user=userService.findUserById(cartItem.getUserId());
     User reqUser=userService.findUserById(userId);
     if(user.getId().equals(reqUser.getId())){
         cartItemRespository.deleteById(cartItemId);
     }else{
         throw new UserException("You cannot remove another user's item");
     }

    }



    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        Optional<CartItem> opt=cartItemRespository.findById(cartItemId);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new CartItemException("Cart Item not found with the id"+cartItemId);
    }
}
