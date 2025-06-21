package com.chaubisedhaka.Backend.controller;

import com.chaubisedhaka.Backend.model.Product;
import com.chaubisedhaka.Backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class AdminProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product>createProduct(@RequestBody CreateProductRequest req){
        Product product=productService.createProduct(req);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }
}
