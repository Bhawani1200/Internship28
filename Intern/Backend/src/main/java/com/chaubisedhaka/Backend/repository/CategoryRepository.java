package com.chaubisedhaka.Backend.repository;

import com.chaubisedhaka.Backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryRepository extends JpaRepository<Category,Long> {

   public  Category findByName(String name);
   @Query("SELECT c FROM Category c WHERE c.name = :name AND c.parentCategory.name = :parentCategoryName")
   Category findByNameAndParent(@Param("name") String name, @Param("parentCategoryName") String parentCategoryName);


//   @Query("select c FROM Category  c Where c.name=:name And c.parentCategory.name=:parentCategoryName")
//   public Category findByNameAndParant(@Param("name")String name,@Param("ParantCategoryByName")String parentCategoryByName);
}
