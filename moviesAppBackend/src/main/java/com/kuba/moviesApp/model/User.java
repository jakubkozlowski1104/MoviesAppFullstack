package com.kuba.moviesApp.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "USERS")
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "is_admin")
    private boolean isAdmin;

    @Column(name = "wallet")
    private double wallet;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<PurchasedMovie> purchasedMovies = new ArrayList<>();

    // Konstruktor
    public User(String email, String username, String password) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = false;
        this.wallet = 0.0;
    }

    // Gettery i settery
}
