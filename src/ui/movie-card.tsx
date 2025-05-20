"use client";

import { useState } from "react";
import { Movie } from "@/app/types";
import Image from "next/image";
import Badge from "./badge";

type MovieCardProps = {
  movie: Movie;
};

function getFormattedMovieDate(date: string) {
  return date.split("-").reverse().join(".");
}

function getFullImagePath(path: string) {
  return `https://media.themoviedb.org/t/p/w220_and_h330_face/${path}`;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div
      className="rounded-xl border bg-card text-card-foreground shadow w-44"
      onClick={() => setShowDialog(true)}
    >
      <div className="flex flex-col justify-center space-y-1.5 gap-2">
        <div className="h-[225px]">
          <Image
            src={getFullImagePath(movie.backdrop_path as string)}
            width={150}
            height={225}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="font-semibold leading-none tracking-tight">
            {movie.title} isDialogOpen {showDialog}
          </div>
          <div>
            <Badge>{Number(movie.vote_average).toFixed(1)}</Badge>
          </div>
          <div className="text-xs">
            Released: {getFormattedMovieDate(movie.release_date)}
          </div>
        </div>
      </div>
      {showDialog && (
        <dialog open>
          <div className="flex flex-col justify-center space-y-1.5 gap-2">
        <div className="h-[225px]">
          <Image
            src={getFullImagePath(movie.backdrop_path as string)}
            width={150}
            height={225}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="font-semibold leading-none tracking-tight">
            {movie.title} isDialogOpen {showDialog}
          </div>
          <div>
            <Badge>{Number(movie.vote_average).toFixed(1)}</Badge>
          </div>
          <div className="text-xs">
            Released: {getFormattedMovieDate(movie.release_date)}
          </div>
        </div>
      </div>
          <form method="dialog">
            <button onClick={() => setShowDialog(false)}>OK</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default MovieCard;
