package com.chaubisedhaka.Backend.response;

public class AuthResponse {
    private String jwt;
    private String message;

    // Constructors
    public AuthResponse() {}

    public AuthResponse(String jwt, String message) {
        this.jwt = jwt;
        this.message = message;
    }

    // Getters and Setters
    public String getJwt() { return jwt; }
    public void setJwt(String jwt) { this.jwt = jwt; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
