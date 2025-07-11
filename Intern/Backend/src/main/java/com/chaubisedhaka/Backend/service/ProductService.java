package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.exception.ProductException;
import com.chaubisedhaka.Backend.model.Product;
import com.chaubisedhaka.Backend.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    public Product createProduct(CreateProductRequest req);

    public String deleteProduct(Long productId) throws ProductException;

    public Product updateProduct(Long productId,Product req)throws ProductException;

    public Product findProductById(Long id) throws ProductException;

    public List<Product> findProductByCategory(String category);

    public Page<Product> getAllProducts(String category,List<String>colors,List<String>sizes,Integer minPrice,Integer maxPrice,
                                        Integer minDiscount,String sort,String stock,Integer pageNumber,Integer pageSize);



    List<Product> findAllProducts();


}
