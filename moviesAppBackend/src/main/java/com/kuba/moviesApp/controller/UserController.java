package com.kuba.moviesApp.controller;

import com.kuba.moviesApp.model.User;
import com.kuba.moviesApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/register/check")
    public ResponseEntity<Map<String, Object>> canSignUp(@RequestBody User newUser) {
        boolean emailExists = userRepository.existsByEmail(newUser.getEmail());
        boolean usernameExists = userRepository.existsByUsername(newUser.getUsername());

        Map<String, Object> response = new HashMap<>();
        if (emailExists && usernameExists) {
            response.put("status", 1);
            response.put("message", "Email and username already exist");
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        } else if (emailExists) {
            response.put("status", 2);
            response.put("message", "Email already exists");
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        } else if (usernameExists) {
            response.put("status", 3);
            response.put("message", "Username already exists");
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        } else {
            userRepository.save(newUser);
            response.put("status", 0);
            response.put("message", "Registration successful");
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
    }
}
