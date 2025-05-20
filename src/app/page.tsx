import Movies from "@/ui/movies";
import Pagination from "@/ui/pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1");

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIES_API_KEY}&page=${currentPage}&include_adult=false`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch movies");
  const data = await res.json();

  return (
    <div>
      <h1>Popular Movies</h1>
      <Movies movies={data.results} />
      <Pagination currentPage={currentPage} totalPages={data.total_pages} />
    </div>
  );
}
