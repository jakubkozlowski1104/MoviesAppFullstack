package com.kuba.moviesApp.service;

import com.kuba.moviesApp.model.Category;
import com.kuba.moviesApp.model.Movie;
import com.kuba.moviesApp.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Page<Movie> getAllMovies(Pageable pageable) {
        return movieRepository.findAll(pageable);
    }

    public long countAllMovies() {
        return movieRepository.count();
    }

    public Page<Movie> searchMoviesByNameOrCategory(String searchQuery, Pageable pageable) {
        try {
            Category category = Category.valueOf(searchQuery.toUpperCase());
            return movieRepository.findByNameContainingIgnoreCaseOrCategory(searchQuery, category, pageable);
        } catch (IllegalArgumentException e) {
            return movieRepository.findByNameContainingIgnoreCase(searchQuery, pageable);
        }
    }
}
