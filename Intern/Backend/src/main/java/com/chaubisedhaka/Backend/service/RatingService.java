package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Rating;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RatingService {
    public Rating createRating(RatingRequest req, User user)throws ProductException;

    public List<Rating> getProducts(Long productId);


    List<Rating> getProductsRating(Long productId);
}
