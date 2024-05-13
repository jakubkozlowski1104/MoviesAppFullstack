package com.kuba.moviesApp.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "USERS")
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @Column(name = "id")
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

    public User(String email, String username, String password) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = false; // Domyślnie nie jest administratorem.
        this.wallet = 0.0; // Domyślnie ustawiamy portfel na 0.
    }
    // Getters and setters
}
