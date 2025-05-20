import { Movie } from "@/app/types";
import Image from "next/image";
import Badge from "./badge";
import { getFormattedDate, getFullImagePath } from "@/lib/utils";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow w-44 cursor-pointer">
      <div className="flex flex-col justify-center space-y-1.5 gap-2">
        <div className="h-[225px]">
          <Image
            src={getFullImagePath(movie.backdrop_path as string)}
            width={150}
            height={225}
            alt={`Picture of ${movie.title} movie`}
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="font-semibold leading-none tracking-tight">
            {movie.title}
          </div>
          <div>
            <Badge>{Number(movie.vote_average).toFixed(1)}</Badge>
          </div>
          <div className="text-xs">
            Released: {getFormattedDate(movie.release_date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
