package com.kuba.moviesApp.controller;

import com.kuba.moviesApp.model.User;
import com.kuba.moviesApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users") // Endpointy związane z użytkownikami
@CrossOrigin("*")
public class WalletController {

    @Autowired
    private UserRepository userRepository;

    // Endpoint do pobierania wartości portfela użytkownika
    @GetMapping("/{userId}/wallet")
    public ResponseEntity<Double> getUserWallet(@PathVariable Long userId) {
        // Sprawdzanie, czy użytkownik istnieje
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

        // Pobranie wartości portfela użytkownika
        double walletValue = user.getWallet();

        // Zwrócenie wartości portfela
        return ResponseEntity.ok(walletValue);
    }

    // Endpoint do dodawania środków do portfela użytkownika
    @PostMapping("/{userId}/wallet/add")
    public ResponseEntity<String> addToUserWallet(@PathVariable Long userId, @RequestBody Map<String, Object> requestBody) {
        // Sprawdzanie, czy użytkownik istnieje
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

        // Pobieranie wartości amount z obiektu requestBody
        Double amount = (Double) requestBody.get("amount");

        // Dodawanie środków do portfela
        double currentWallet = user.getWallet();
        user.setWallet(currentWallet + amount);

        // Zapisanie zmian w bazie danych
        userRepository.save(user);

        // Zwrócenie odpowiedzi
        return ResponseEntity.ok("Amount added to wallet successfully.");
    }


}
