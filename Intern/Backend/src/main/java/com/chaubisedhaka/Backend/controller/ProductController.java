package com.chaubisedhaka.Backend.controller;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Product;
import com.chaubisedhaka.Backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<Page<Product>>findProductByCategoryHandler(
            @RequestParam String category,
            @RequestParam List<String>color,
            @RequestParam List<String>size,
            @RequestParam Integer minPrice,
            @RequestParam Integer maxPrice,
            @RequestParam String sort,
            @RequestParam String stock,
            @RequestParam Integer pageNumber,
            @RequestParam Integer minDiscount,
            @RequestParam Integer pageSize

    )
    {
        Page<Product>res=productService.getAllProducts( category, color, size, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize);


        System.out.println("complete products");
        return  new ResponseEntity<>(res, HttpStatus.ACCEPTED);
    }


    @GetMapping("/products/id/{productId}")
    public ResponseEntity<Product>findProductByIdHandler(@PathVariable Long productId)throws ProductException{
        Product product=productService.findProductById(productId);
        return new ResponseEntity<>(product,HttpStatus.ACCEPTED);
    }
}
