package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.model.Address;
import com.chaubisedhaka.Backend.model.User;
import org.hibernate.query.Order;

public interface OrderService {

    public Order createOrder(User user, Address shippingAddress);

}
