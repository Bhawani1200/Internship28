package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.model.User;
import jdk.jshell.spi.ExecutionControl;



public interface UserService {

    public User findUserById(Long userId) throws ExecutionControl.UserException;

    public User findUserProfileByJwt(String jwt) throws ExecutionControl.UserException;

}
