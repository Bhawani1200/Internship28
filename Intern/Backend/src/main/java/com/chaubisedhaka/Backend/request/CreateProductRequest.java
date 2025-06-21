package com.chaubisedhaka.Backend.request;

import com.chaubisedhaka.Backend.model.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateProductRequest {

    private String title;

    private String description;

    private int price;

    private int discountedPrice;

    private int quantity;

    private String brand;

    private String color;

    private Set<Size> size=new HashSet<>();

    private String topLevelCategory;
    private String secondLevelCategory;
    private String thirdLevelCategory;



}
