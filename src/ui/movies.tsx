import { Movie } from "@/app/types";
import * as React from "react";
import MovieCard from "./movie-card";

type MoviesProps = {
  movies: Movie[];
};

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {movies.map((movie, index) => (
        // <div key={index}>{movie.title}</div>
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
