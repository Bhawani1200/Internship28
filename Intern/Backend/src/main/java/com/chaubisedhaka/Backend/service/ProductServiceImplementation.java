package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImplementation implements ProductService {

    @Override
    public Product createProduct(createProductRequest req) {
        return null;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        return "";
    }

    @Override
    public Product updateProduct(Long productId, Product product) throws ProductException {
        return null;
    }

    @Override
    public Product findProductById(Long id) throws ProductException {
        return null;
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return List.of();
    }

    @Override
    public Page<Product> getAllProducts(String category, List<String> colors, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
        return null;
    }
}
