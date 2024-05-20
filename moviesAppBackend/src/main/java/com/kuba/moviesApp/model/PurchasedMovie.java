package com.kuba.moviesApp.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "PURCHASED_MOVIES")
@Getter
@Setter
@NoArgsConstructor
public class PurchasedMovie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference(value = "user-purchases")
    private User user;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    @JsonBackReference(value = "movie-purchases")
    private Movie movie;

    @Column(name = "order_date")
    private LocalDate orderDate;

    // Konstruktor
    public PurchasedMovie(User user, Movie movie) {
        this.user = user;
        this.movie = movie;
        this.orderDate = LocalDate.now(); // Ustawienie daty zamówienia na dzień dzisiejszy
    }
}
