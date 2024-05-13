package com.kuba.moviesApp.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "MOVIES")
@Getter
@Setter
@NoArgsConstructor
public class Movie {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private Category category;

    @Column(name = "director")
    private String director;

    @Column(name = "duration")
    private int duration; // Czas trwania filmu w minutach

    @Column(name = "release_year")
    private int releaseYear; // Rok wydania filmu

    @Column(name = "description", length = 1000)
    private String description; // Opis filmu

    @Column(name = "rating")
    private double rating; // Ocena filmu

    @Column(name = "price")
    private double price; // Ocena filmu

    @Lob
    @Column(name = "photo")
    private byte[] photo; // Zdjęcie filmu (przechowywane jako tablica bajtów)

    @OneToMany(mappedBy = "movie")
    private List<PurchasedMovie> purchasedByUsers = new ArrayList<>();


    // Konstruktor
    public Movie(String name, Category category, String director, int duration) {
        this.name = name;
        this.category = category;
        this.director = director;
        this.duration = duration;
        // Domyślne wartości dla innych pól
        this.releaseYear = 0;
        this.description = "";
        this.rating = 0.0;
    }

    // Getters and setters
}
