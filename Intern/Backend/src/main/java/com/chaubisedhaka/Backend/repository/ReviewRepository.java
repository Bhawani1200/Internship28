package com.chaubisedhaka.Backend.repository;

import com.chaubisedhaka.Backend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review,Long> {

    @Query("Select r from Review r where r.product.id=:productId")
    public List<Review> getALlProductsReview(@Param("productId")Long productId);

}
