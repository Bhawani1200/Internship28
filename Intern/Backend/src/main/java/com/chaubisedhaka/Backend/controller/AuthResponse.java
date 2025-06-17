package com.chaubisedhaka.Backend.controller;

public class AuthResponse {
    private String jwt;
    private String message;

    public AuthResponse(){

    }


    public AuthResponse(String jwt, String message) {
        super();
        this.jwt = jwt;
        this.message = message;
    }

    public String getJwt() {
        return jwt;
    }

    public String getMessage() {
        return message;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
