package com.kuba.moviesApp.controller;

import com.kuba.moviesApp.model.Movie;
import com.kuba.moviesApp.model.PurchasedMovie;
import com.kuba.moviesApp.model.User;
import com.kuba.moviesApp.repository.MovieRepository;
import com.kuba.moviesApp.repository.PurchasedMovieRepository;
import com.kuba.moviesApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/purchasedMovies")
public class PurchasedMovieController {

    private final UserRepository userRepository;
    private final MovieRepository movieRepository;
    private final PurchasedMovieRepository purchasedMovieRepository;

    @Autowired
    public PurchasedMovieController(UserRepository userRepository, MovieRepository movieRepository,
                                    PurchasedMovieRepository purchasedMovieRepository) {
        this.userRepository = userRepository;
        this.movieRepository = movieRepository;
        this.purchasedMovieRepository = purchasedMovieRepository;
    }

    @GetMapping("/user/{userId}/movies")
    public ResponseEntity<?> getOwnedMoviesByUserId(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

        List<Movie> ownedMovies = purchasedMovieRepository.findMoviesByUser(user);

        return ResponseEntity.ok(ownedMovies);
    }

    @PostMapping("/purchase")
    public ResponseEntity<?> purchaseMovie(@RequestParam Long userId, @RequestParam Long movieId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new IllegalArgumentException("Movie not found with id: " + movieId));

        boolean alreadyPurchased = purchasedMovieRepository.existsByUserAndMovie(user, movie);
        if (alreadyPurchased) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("You have already purchased this movie.");
        } //204

        PurchasedMovie purchasedMovie = new PurchasedMovie(user, movie);
        purchasedMovie.setOrderDate(LocalDate.now());

        purchasedMovieRepository.save(purchasedMovie);

        return ResponseEntity.ok("Movie purchased successfully."); //200
    }

}
