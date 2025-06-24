package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.OrderException;
import com.chaubisedhaka.Backend.model.*;
import com.chaubisedhaka.Backend.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImplementation implements OrderService {

    private OrderRepository orderRepository;
    private CartService cartService;
    private AddressRepository addressRepository;
    private UserRepository userRepository;
    private OrderItemRepository orderItemRepository;
    private OrderItemService orderItemService;

    public OrderServiceImplementation(OrderItemService orderItemService,OrderItemRepository orderItemRepository,UserRepository userRepository,AddressRepository addressRepository,CartService cartService,OrderRepository orderRepository){
        this.orderRepository=orderRepository;
        this.cartService=cartService;
        this.addressRepository=addressRepository;
        this.userRepository=userRepository;
        this.orderItemRepository=orderItemRepository;
        this.orderItemService=orderItemService;
    }


    @Override
    public Order createOrder(User user, Address shippingAddress) {

        shippingAddress.setUser(user);
        Address address = addressRepository.save(shippingAddress);
        user.getAddress().add(address);
        userRepository.save(user);

        Cart cart = cartService.findUserCart(user.getId());
        List<OrderItem> orderItems = new ArrayList<>();


        for (CartItem item : cart.getCartItems()) {
            OrderItem orderItem = new OrderItem();

            orderItem.setPrice(item.getPrice());
            orderItem.setProduct(item.getProduct());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setSize(item.getSize());
            orderItem.setUserId(item.getUserId());
            orderItem.setDiscountPrice(item.getDiscountedPrice());
            OrderItem createdOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(createdOrderItem);
        }

            Order createdOrder = new Order();
            createdOrder.setUser(user);
            createdOrder.setOrderItems(orderItems);
            createdOrder.setTotalPrice(cart.getTotalPrice());
            createdOrder.setTotalDiscountPrice(cart.getTotalDiscountedPrice());
            createdOrder.setDiscount(cart.getDiscount());
            createdOrder.setTotalItem(cart.getTotalItem());
            createdOrder.setShippingAddress(address);
            createdOrder.setOrderStatus("PENDING");
            createdOrder.getPaymentDetails().setStatus("PENDING");
            createdOrder.setCreatedAt(LocalDateTime.now());

            Order savedOrder = orderRepository.save(createdOrder);

            for (OrderItem item : orderItems) {
                item.setOrder(savedOrder);
                orderItemRepository.save(item);
            }
            return savedOrder;

        }


    @Override
    public Order findOrderById(Long orderId) throws OrderException {
        Optional<Order>opt=orderRepository.findById(orderId);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new OrderException("Order doesnot exist with the id"+orderId);

    }

    @Override
    public List<Order> userOrderHistory(Long userId) {
        List<Order> orders=orderRepository.getUsersOrders(userId);
        return orders;
    }

    @Override
    public Order confirmOrder(Long orderId) throws OrderException {
        Order order=findOrderById(orderId);
        order.setOrderStatus("CONFIRMED");
        return orderRepository.save(order);
    }

    @Override
    public Order placedOrder(Long orderId) throws OrderException {
        Order order=findOrderById(orderId);
        order.setOrderStatus("Placed");
        order.getPaymentDetails().setStatus("PENDING");
        return order;
    }


    @Override
    public Order shippedOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order deliveredOrder(Long orderId) throws OrderException {
        Order order=findOrderById(orderId);
        order.setOrderStatus("CANCELLED");
        return orderRepository.save(order);
    }

    @Override
    public Order canceledOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public List<Order> getALlOrders() {
        return orderRepository.findAll();
    }

    @Override
    public void deleteOrder(Long orderId) throws OrderException {
      Order order =findOrderById(orderId);
       orderRepository.deleteById(orderId);
    }
}
