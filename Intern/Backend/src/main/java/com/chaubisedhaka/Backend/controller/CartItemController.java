package com.chaubisedhaka.Backend.controller;

import com.chaubisedhaka.Backend.exception.CartItemException;
import com.chaubisedhaka.Backend.model.CartItem;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.request.UpdateCartItemRequest;
import com.chaubisedhaka.Backend.response.ApiResponse;
import com.chaubisedhaka.Backend.service.CartItemService;
import com.chaubisedhaka.Backend.service.UserService;
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

    @Autowired
    private UserService userService;


    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId,@RequestHeader("Authorization")String jwt) throws CartItemException, ExecutionControl.UserException {
        User user=userService.findUserProfileByJwt(jwt);
        cartItemService.removeCartItem(user.getId(), cartItemId,jwt);
        ApiResponse response = new ApiResponse();
        response.setMessage("Cart item deleted successfully");
        response.setStatus(true);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/{cartItemId}")
    public ResponseEntity<CartItem> updateCartItem(
            @PathVariable Long cartItemId,
            @RequestBody UpdateCartItemRequest req
    ) throws CartItemException, ExecutionControl.UserException, ExecutionControl.UserException {

        CartItem existingCartItem = cartItemService.findCartItemById(cartItemId);
        Long userId = existingCartItem.getUserId();

        CartItem cartItemToUpdate = new CartItem();
        cartItemToUpdate.setQuantity(req.getQuantity());

        CartItem updatedItem = cartItemService.updateCartItem(userId, cartItemId, cartItemToUpdate);
        return new ResponseEntity<>(updatedItem, HttpStatus.OK);
    }

}
