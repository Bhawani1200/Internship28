package com.chaubisedhaka.Backend.controller;

import com.chaubisedhaka.Backend.exception.OrderException;
import com.chaubisedhaka.Backend.exception.UserException;
import com.chaubisedhaka.Backend.model.Address;
import com.chaubisedhaka.Backend.model.Order;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.service.OrderService;
import com.chaubisedhaka.Backend.service.UserService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @PostMapping("/")
    public ResponseEntity<Order>createOrder(@RequestBody Address shippingAddress, @RequestHeader("Authorization")String jwt) throws UserException, ExecutionControl.UserException {
        User user=userService.findUserProfileByJwt(jwt);

        Order order=orderService.createOrder(user,shippingAddress);

        System.out.println("Order"+order);

        return new ResponseEntity<Order>(order, HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>>usersOrderHistory(@RequestHeader("Authorization") String jwt) throws ExecutionControl.UserException {

        User user=userService.findUserProfileByJwt(jwt);

        List<Order>orders=orderService.userOrderHistory(user.getId());

        return new ResponseEntity<>(orders,HttpStatus.CREATED);
    }

    @GetMapping("/{Id}")
    public ResponseEntity<Order>findOrderById(@PathVariable("Id") Long orderId,@RequestHeader("Authorization")String jwt) throws OrderException, UserException, ExecutionControl.UserException {
        User user=userService.findUserProfileByJwt(jwt);

        Order order=orderService.findOrderById(orderId);

        return new ResponseEntity<>(order,HttpStatus.CREATED);
    }
}
