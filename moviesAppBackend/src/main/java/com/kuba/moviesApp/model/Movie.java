package com.kuba.moviesApp.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "MOVIES")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    @Id
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
    private int duration;

    @Column(name = "release_year")
    private int releaseYear;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "rating")
    private double rating;

    @Column(name = "price")
    private double price;

    @Column(name = "photo_path", length = 255)
    private String photoPath;

    @OneToMany(mappedBy = "movie")
    @JsonManagedReference
    private List<PurchasedMovie> purchasedByUsers = new ArrayList<>();

    // Konstruktor
    public Movie(String name, Category category, String director, int duration) {
        this.name = name;
        this.category = category;
        this.director = director;
        this.duration = duration;
        this.releaseYear = 0;
        this.description = "";
        this.rating = 0.0;
    }

    // Gettery i settery
}
