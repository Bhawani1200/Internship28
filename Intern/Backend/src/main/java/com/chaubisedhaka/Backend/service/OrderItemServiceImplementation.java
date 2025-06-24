package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.model.OrderItem;
import com.chaubisedhaka.Backend.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderItemServiceImplementation implements OrderItemService{

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {

        return orderItemRepository.save(orderItem);
    }
}
