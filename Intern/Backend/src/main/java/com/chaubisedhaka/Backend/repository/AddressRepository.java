package com.chaubisedhaka.Backend.repository;

import com.chaubisedhaka.Backend.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address,Long> {

}
