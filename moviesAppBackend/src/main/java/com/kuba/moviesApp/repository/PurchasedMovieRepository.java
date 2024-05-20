package com.kuba.moviesApp.repository;

import com.kuba.moviesApp.model.PurchasedMovie;
import com.kuba.moviesApp.model.User;
import com.kuba.moviesApp.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurchasedMovieRepository extends JpaRepository<PurchasedMovie, Long> {
    boolean existsByUserAndMovie(User user, Movie movie);

    @Query("SELECT pm.movie FROM PurchasedMovie pm WHERE pm.user = :user")
    List<Movie> findMoviesByUser(User user);
}
