package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Product;
import com.chaubisedhaka.Backend.model.Review;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.repository.ProductRepository;
import com.chaubisedhaka.Backend.repository.ReviewRepository;
import com.chaubisedhaka.Backend.request.ReviewRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewServiceImplementation implements ReviewService{
    private ReviewRepository reviewRepository;
    private ProductService productService;
    private ProductRepository productRepository;
    public ReviewServiceImplementation(ReviewRepository reviewRepository,ProductService productService,ProductRepository productRepository){
        this.productService=productService;
        this.reviewRepository=reviewRepository;
        this.productRepository=productRepository;

    }

    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {
          Product product=productService.findProductById(req.getProductid());
          Review review=new Review();
          review.setUser(user);
          review.setProduct(product);
          review.setReview(req.getReview());
          review.setCreatedAt(LocalDateTime.now());
          return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepository.getALlProductsReview(productId);
    }
}
