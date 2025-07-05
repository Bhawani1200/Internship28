package com.chaubisedhaka.Backend.repository;

import com.chaubisedhaka.Backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;



public interface ProductRepository extends JpaRepository<Product,Long> {

        @Query("SELECT p FROM Product p " +
        "WHERE (:category = '' OR p.category.name = :category) " +
        "AND ((:minPrice IS NULL AND :maxPrice IS NULL) OR (p.discountedPrice BETWEEN :minPrice AND :maxPrice)) " +
        "AND (:minDiscount IS NULL OR p.discountPersent >= :minDiscount) " +
        "ORDER BY " +
        "CASE WHEN :sort = 'price_low' THEN p.discountedPrice END ASC, " +
        "CASE WHEN :sort = 'high_low' THEN p.discountedPrice END DESC")
public List<Product> filterProducts(@Param("category")String category,
                                        @Param("minPrice")Integer minPrice,
                                        @Param("maxPrice")Integer maxPrice,
                                        @Param("minDiscount")Integer minDiscount,
                                        @Param("sort")String sort);




}


//    @Query("SELECT p FROM Product p" + "WHERE(p.category.name=:category OR :category='')"+
//    "AND ((:minPrice IS NULL AND :maxPrice IS NULL) OR (p.discountedprice BETWEEN :minPrice AND :maxPrice))"+
//            "AND (:minDiscount IS NULL OR p.discountPersent>=:minDiscount)"+
//            "ORDER BY"+
//            "CASE WHERE :sort='price_low' THEN p.discountedPrice END ASC,"+
//            "CASE WHERE :sort='high_low' THEN p.discountedPrice END DESC,"
//    )