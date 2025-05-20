import { Movie } from "@/app/types";
import Image from "next/image";
import { getFullImagePath } from "@/lib/utils";
import MovieCard from "./movie-card";

type MovieDetailProps = {
  movie: Movie;
};

const MovieDetail: React.FC<MovieDetailProps> = async ({ movie }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${process.env.MOVIES_API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch similar movies");
  const data = await res.json();
  const similarMovies: Movie[] = data.results ?? [];

  return (
    <div className="flex flex-wrap gap-2 overflow-hidden">
      <div className="flex">
        <Image
          src={getFullImagePath(movie.backdrop_path as string)}
          width={150}
          height={225}
          alt={`Picture of ${movie.title} movie`}
        />
        <div>{movie.title}</div>
      </div>
      <div>
        <div>Similar</div>
        <div className="flex gap-2">
          {similarMovies.map((item, index) => (
            <MovieCard movie={item} key={index} />
          ))} 
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
