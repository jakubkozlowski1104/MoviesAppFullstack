package com.kuba.moviesApp.model;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "CATEGORIES")
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", unique = true)
    private String name;

    @ManyToMany(mappedBy = "categories")
    private Set<Movies> movies;

    // Gettery i settery
}