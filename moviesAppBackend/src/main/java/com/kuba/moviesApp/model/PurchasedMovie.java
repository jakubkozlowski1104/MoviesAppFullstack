package com.kuba.moviesApp.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

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
    private User user;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @Column(name = "order_date")
    private LocalDate orderDate;
    // Konstruktor
    public PurchasedMovie(User user, Movie movie) {
        this.user = user;
        this.movie = movie;
    }
}
