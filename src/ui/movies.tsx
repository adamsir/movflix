import * as React from "react";

type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MoviesProps = {
  movies: Movie[];
};

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <div>
      moviesss
      <div>
        {movies.map((movie, index) => (
          <div key={index}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
