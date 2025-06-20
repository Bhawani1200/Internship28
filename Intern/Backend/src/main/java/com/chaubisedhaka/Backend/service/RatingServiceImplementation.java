package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Product;
import com.chaubisedhaka.Backend.model.Rating;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.repository.RatingRepository;
import com.chaubisedhaka.Backend.request.RatingRequest;

import java.time.LocalDateTime;
import java.util.List;

public class RatingServiceImplementation implements RatingService{
    private RatingRepository ratingRepository;
    private ProductService productService;

    public RatingServiceImplementation(RatingRepository ratingRepository,ProductService productService){
        this.ratingRepository=ratingRepository;
        this.productService=productService;
    }

    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {
        Product product =productService.findProductById(req.getProductId());
        Rating rating=new Rating();

        rating.setProduct(product);
        rating.setRating(req.getRating());
        rating.setUser(user);
        rating.setCreatedAt(LocalDateTime.now());

        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getProducts(Long productId) {
        return ratingRepository.getALlProductsRating(productId);
    }

    @Override
    public List<Rating> getProductsRating(Long productId) {
        return ratingRepository.getALlProductsRating(productId);
    }


}
