import { Movie } from "@/app/types";
import { VisuallyHidden } from "radix-ui";
import * as React from "react";
import MovieCard from "./movie-card";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import MovieDetail from "./movie-detail";

type MoviesProps = {
  movies: Movie[];
};

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {movies.map((movie, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <MovieCard key={index} movie={movie} />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <VisuallyHidden.Root>
              <DialogTitle>{movie.title}</DialogTitle>
            </VisuallyHidden.Root>
            <MovieDetail movie={movie} />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Movies;
