package com.chaubisedhaka.Backend.repository;

import com.chaubisedhaka.Backend.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {

}
