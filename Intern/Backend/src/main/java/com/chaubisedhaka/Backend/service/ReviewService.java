package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Review;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.request.ReviewRequest;

import java.util.List;

public interface ReviewService {
    public Review createReview(ReviewRequest req, User user)throws ProductException;

    public List<Review> getAllReview(Long productId);
}
