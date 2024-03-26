package com.kuba.moviesApp.model;
import jakarta.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "MOVIES")
public class Movies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title", unique = true)
    private byte[] title;

    @Column(name = "description")
    private String description;

    @Column(name = "director")
    private String director;

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "image")
    private byte[] image;

    @ManyToMany
    @JoinTable(
            name = "MOVIE_CATEGORIES",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Categories> categories;

    // Gettery i settery
}