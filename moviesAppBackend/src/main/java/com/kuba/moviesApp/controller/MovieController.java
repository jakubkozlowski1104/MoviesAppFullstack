package com.kuba.moviesApp.controller;

import com.kuba.moviesApp.model.Movie;
import com.kuba.moviesApp.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@RequestMapping("/movies")
@RestController
@CrossOrigin("*")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public Page<Movie> getAllMovies(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size,
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDirection,
            @RequestParam(required = false) String searchQuery) {

        // Validate sortDirection
        if (!sortDirection.equalsIgnoreCase("asc") && !sortDirection.equalsIgnoreCase("desc")) {
            throw new IllegalArgumentException("Invalid value '" + sortDirection + "' for sort direction; Has to be either 'desc' or 'asc' (case insensitive)");
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(sortDirection.toUpperCase()), sortBy));

        if (searchQuery != null && !searchQuery.isEmpty()) {
            return movieService.searchMoviesByNameOrCategory(searchQuery, pageable);
        } else {
            return movieService.getAllMovies(pageable);
        }
    }

    @GetMapping("/random")
    public List<Movie> getRandomMovies(@RequestParam(required = false) List<Long> excludedIds) {
        List<Movie> allMovies = movieService.getAllMoviesWithoutPagination();

        // Remove excluded movies
        if (excludedIds != null && !excludedIds.isEmpty()) {
            allMovies = allMovies.stream()
                    .filter(movie -> !excludedIds.contains(movie.getId()))
                    .collect(Collectors.toList());
        }

        int totalMovies = allMovies.size();
        int numberOfRandomMovies = Math.min(totalMovies, 3); // Limit to 3 random movies or total available movies

        // Get 3 random movies
        Random random = new Random();
        List<Movie> randomMovies = random.ints(0, totalMovies)
                .distinct()
                .limit(numberOfRandomMovies)
                .mapToObj(allMovies::get)
                .collect(Collectors.toList());

        return randomMovies;
    }



    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleIllegalArgumentException(IllegalArgumentException e) {
        return e.getMessage();
    }

    @GetMapping("/count")
    public long countMovies() {
        return movieService.countAllMovies();
    }
}
