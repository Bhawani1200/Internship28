package com.chaubisedhaka.Backend.controller;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.exception.UserException;
import com.chaubisedhaka.Backend.model.Rating;
import com.chaubisedhaka.Backend.model.Review;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.request.RatingRequest;
import com.chaubisedhaka.Backend.request.ReviewRequest;
import com.chaubisedhaka.Backend.service.ReviewService;
import com.chaubisedhaka.Backend.service.UserService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private UserService userService;


    @PostMapping("/create")
    public ResponseEntity<Review>createReview(@RequestBody ReviewRequest req, @RequestHeader("Authorization")String jwt) throws UserException, ProductException, ExecutionControl.UserException {
        User user=userService.findUserProfileByJwt(jwt);

        Review review=reviewService.createReview(req,user);

        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getProductsRating(@PathVariable Long productId, @RequestHeader("Authorization")String jwt) throws UserException, ProductException, ExecutionControl.UserException {
        User user=userService.findUserProfileByJwt(jwt);

        List<Review> reviews=reviewService.getAllReview(productId);

        return new ResponseEntity<>(reviews, HttpStatus.CREATED);
    }

}
