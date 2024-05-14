package com.kuba.moviesApp.controller;

import com.kuba.moviesApp.model.User;
import com.kuba.moviesApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        try {
            if (!userRepository.existsById(id)) {
                return new ResponseEntity<>("User with given ID does not exist", HttpStatus.NOT_FOUND);
            }
            userRepository.deleteById(id);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/user/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody Map<String, String> updateData) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (updateData.containsKey("username")) {
                user.setUsername(updateData.get("username"));
            }
            if (updateData.containsKey("email")) {
                user.setEmail(updateData.get("email"));
            }
            if (updateData.containsKey("password")) {
                user.setPassword(updateData.get("password"));
            }
            userRepository.save(user);
            return new ResponseEntity<>("User updated successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User with given ID not found", HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/user/register/check")
    public ResponseEntity<Map<String, Object>> canSignUp(@RequestBody User newUser) {
        boolean emailExists = userRepository.existsByEmail(newUser.getEmail());
        boolean usernameExists = userRepository.existsByUsername(newUser.getUsername());

        Map<String, Object> response = new HashMap<>();
        if (emailExists && usernameExists) {
            response.put("status", 1);
            response.put("message", "Email and username already exist");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else if (emailExists) {
            response.put("status", 2);
            response.put("message", "Email already exists");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else if (usernameExists) {
            response.put("status", 3);
            response.put("message", "Username already exists");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            userRepository.save(newUser);
            response.put("status", 0);
            response.put("message", "Registration successful");
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
    }



    @PostMapping("/user/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        User user = userRepository.findByEmail(email);
        if (user == null) {
            return new ResponseEntity<>(Map.of("error", "User not found"), HttpStatus.OK);
        }

        if (!password.equals(user.getPassword())) {
            return new ResponseEntity<>(Map.of("error", "Invalid password"), HttpStatus.OK);
        }

        String token = "token-" + user.getUsername();

        Map<String, Object> response = new HashMap<>();
        response.put("user", user);
        response.put("token", token);
        return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
    }
}
