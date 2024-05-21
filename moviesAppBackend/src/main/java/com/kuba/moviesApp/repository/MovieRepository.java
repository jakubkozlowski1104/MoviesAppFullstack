package com.kuba.moviesApp.repository;

import com.kuba.moviesApp.model.Category;
import com.kuba.moviesApp.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    Page<Movie> findByNameContainingIgnoreCase(String name, Pageable pageable);
    Page<Movie> findByNameContainingIgnoreCaseOrCategory(String name, Category category, Pageable pageable);

    // New method to retrieve all movies
    Page<Movie> findAll(Pageable pageable);

}
