package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.OrderException;
import com.chaubisedhaka.Backend.model.Address;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.model.Order;
import java.util.List;

public interface OrderService {

    public Order createOrder(User user, Address shippingAddress);

    public Order findOrderById(Long orderId) throws OrderException;

    public List<Order>userOrderHistory(Long userId);

    public Order confirmOrder(Long orderId) throws OrderException;

    public Order shippedOrder(Long orderId) throws OrderException;

    public Order deliveredOrder(Long orderId) throws OrderException;

    public Order canceledOrder(Long orderId) throws OrderException;

    public List<Order>getALlOrders();

    public void deleteOrder(Long orderId)throws OrderException;

}
