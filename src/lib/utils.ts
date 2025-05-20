import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// helper for TMDB images
export function getFullImagePath(path: string) {
  return `https://media.themoviedb.org/t/p/w220_and_h330_face/${path}`;
}

// helper for human-friendly dates
export function getFormattedDate(date: string) {
  return date.split("-").reverse().join(".");
}
