package com.chaubisedhaka.Backend.controller;

import com.chaubisedhaka.Backend.config.JwtProvider;
import com.chaubisedhaka.Backend.exception.UserException;
import com.chaubisedhaka.Backend.model.Cart;
import com.chaubisedhaka.Backend.model.User;
import com.chaubisedhaka.Backend.repository.UserRepository;
import com.chaubisedhaka.Backend.service.CartService;
import com.chaubisedhaka.Backend.service.CustomUserServiceImplementation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserRepository userRepository;
    private JwtProvider jwtProvider;
    private PasswordEncoder passwordEncoder;
    private CustomUserServiceImplementation customUserServiceImplementation;
    private CartService cartService;

    public AuthController(UserRepository userRepository,CustomUserServiceImplementation customUserServiceImplementation,PasswordEncoder passwordEncoder,JwtProvider jwtProvider,CartService cartService){
        this.userRepository= userRepository;
        this.customUserServiceImplementation=customUserServiceImplementation;
        this.passwordEncoder=passwordEncoder;
        this.jwtProvider = jwtProvider;
        this.cartService=cartService;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException{

        String email=user.getEmail();
        String password=user.getPassword();
        String firstName=user.getFirstName();
        String lastName=user.getLastName();

        User isEmailExists=userRepository.findByEmail(email);
        if(isEmailExists!=null){
            throw new UserException("Email is already used with another account");
        }

        User createdUser=new User();
        createdUser.setEmail(email);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setFirstName(firstName);
        createdUser.setLastName(lastName);
        User savedUser=userRepository.save(createdUser);
        Cart cart=cartService.createCart(savedUser);

        Authentication authentication=new UsernamePasswordAuthenticationToken(savedUser.getEmail(),savedUser.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token=jwtProvider.generateToken(authentication);
        AuthResponse authResponse=new AuthResponse() ;
        authResponse.setJwt(token);
        authResponse.setMessage("SignUp Success");
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
    };

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest) {
        String username=loginRequest.getEmail();
        String password=loginRequest.getPassword();
        Authentication authentication=authenticate(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token=jwtProvider.generateToken(authentication);
        AuthResponse authResponse=new AuthResponse(token,"Signin Success");
        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails= customUserServiceImplementation.loadUserByUsername(username);
        if(userDetails==null){
            throw new BadCredentialsException("Invalid Username......");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Invalid Password......");
        }
       return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    };

}
