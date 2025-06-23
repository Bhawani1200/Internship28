package com.chaubisedhaka.Backend.controller;

import com.chaubisedhaka.Backend.exception.CartItemException;
import com.chaubisedhaka.Backend.model.CartItem;
import com.chaubisedhaka.Backend.response.ApiResponse;
import com.chaubisedhaka.Backend.service.CartItemService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart_items")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    // DELETE endpoint without JWT check
    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId) throws CartItemException, ExecutionControl.UserException {
        // Call directly without user/JWT validation
        CartItem cartItem = cartItemService.findCartItemById(cartItemId);
        cartItemService.removeCartItem(cartItem.getUserId(), cartItemId, null);

        ApiResponse response = new ApiResponse();
        response.setMessage("Cart item deleted successfully");
        response.setStatus(true);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
