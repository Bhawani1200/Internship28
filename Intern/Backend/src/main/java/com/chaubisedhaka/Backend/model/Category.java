package com.chaubisedhaka.Backend.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Size(max=50)
    private  String name;

    @JoinColumn(name="parent_category_id")
    @ManyToOne(fetch=FetchType.EAGER)
    private Category parentCategory;

    private int level;

     public Category(){

     }

    public Category(Long id, String name, Category parentCategory, int level) {
        this.id = id;
        this.name = name;
        this.parentCategory = parentCategory;
        this.level = level;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Category getParentCategory() {
        return parentCategory;
    }

    public int getLevel() {
        return level;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setParentCategory(Category parentCategory) {
        this.parentCategory = parentCategory;
    }

    public void setLevel(int level) {
        this.level = level;
    }
}
