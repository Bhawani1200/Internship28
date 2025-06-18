package com.chaubisedhaka.Backend.service;

import com.chaubisedhaka.Backend.config.JwtProvider;
import com.chaubisedhaka.Backend.exception.UserException;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.repository.UserRepository;
import jdk.jshell.spi.ExecutionControl;

import java.util.Optional;

public class UserServiceImplementation implements UserService{

    private UserRepository userRepository;
    private JwtProvider jwtProvider;

    public UserServiceImplementation(UserRepository userRepository,JwtProvider jwtProvider){
        this.userRepository=userRepository;
        this.jwtProvider=jwtProvider;
    }

    @Override
    public User findUserById(Long userId) throws ExecutionControl.UserException {
        Optional<User>user=userRepository.findById(userId);
        if(user.isPresent()){
            return user.get();
        }
        throw new UserException("User not found with the id"+userId);

    }

    @Override
    public User findUserProfileByJwt(String jwt) throws ExecutionControl.UserException {
        String email=jwtProvider.getEmailToken(jwt);

        User user=userRepository.findByEmail(email);
        if(user==null){
            throw new UserException("User not found with the given email"+email);
        }
        return user;
    }
}
