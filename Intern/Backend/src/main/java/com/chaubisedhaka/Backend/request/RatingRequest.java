package com.chaubisedhaka.Backend.request;

public class RatingRequest {
    private Long productId;
    private double rating;

    public RatingRequest(){

    }

    public RatingRequest(Long productId, double rating) {
        this.productId = productId;
        this.rating = rating;
    }

    public Long getProductId() {
        return productId;
    }

    public double getRating() {
        return rating;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
