package com.kuba.moviesApp.repository;

import com.kuba.moviesApp.model.PurchasedMovie;
import com.kuba.moviesApp.model.User;
import com.kuba.moviesApp.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchasedMovieRepository extends JpaRepository<PurchasedMovie, Long> {
    boolean existsByUserAndMovie(User user, Movie movie);
}
