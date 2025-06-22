package com.chaubisedhaka.Backend.controller;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.exception.UserException;
import com.chaubisedhaka.Backend.model.Address;
import com.chaubisedhaka.Backend.model.Order;
import com.chaubisedhaka.Backend.model.Rating;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.request.RatingRequest;
import com.chaubisedhaka.Backend.service.RatingService;
import com.chaubisedhaka.Backend.service.UserService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

public class RatingController {
    @Autowired
    private RatingService ratingService;

    @Autowired
    private UserService userService;

    @RequestMapping("/create")
    public ResponseEntity<Rating> createRating(@RequestBody RatingRequest req, @RequestHeader("Authorization")String jwt) throws UserException, ProductException, ExecutionControl.UserException {
        User user=userService.findUserProfileByJwt(jwt);

        Rating rating=ratingService.createRating(req,user);

        return new ResponseEntity<Rating>(rating, HttpStatus.CREATED);
    }
}
