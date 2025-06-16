package com.chaubisedhaka.Backend.repository;

import com.chaubisedhaka.Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByEmail(String email);
}
