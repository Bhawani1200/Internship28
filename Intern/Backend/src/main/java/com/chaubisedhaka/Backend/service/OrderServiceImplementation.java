package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.OrderException;
import com.chaubisedhaka.Backend.model.Address;
import com.chaubisedhaka.Backend.model.Order;
import com.chaubisedhaka.Backend.model.User;

import com.chaubisedhaka.Backend.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImplementation implements OrderService{

    private CartRepository cartRepository;
    private CartService cartItemService;
    private ProductService productService;


    public OrderServiceImplementation(CartRepository cartRepository, CartService cartItemService, ProductService productService){

        this.cartRepository=cartRepository;
        this.cartItemService=cartItemService;
        this.productService=productService;
    }

    @Override
    public Order createOrder(User user, Address shippingAddress) {
        return null;
    }

    @Override
    public Order findOrderById(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public List<Order> userOrderHistory(Long userId) {
        return List.of();
    }

    @Override
    public Order confirmOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order shippedOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order deliveredOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order canceledOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public List<Order> getALlOrders() {
        return List.of();
    }

    @Override
    public void deleteOrder(Long orderId) throws OrderException {

    }
}
