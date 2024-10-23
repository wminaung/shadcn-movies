"use client";

import MyImageCard from "@/components/MyImageCard";
import useFetchMovies from "@/hooks/use-fetch-movies";
interface Props {
  params: { id: string };
  searchParams: { title: string };
}
export default function AllMovies({ searchParams }: Props) {
  const { movies, loading, error } = useFetchMovies(
    `http://localhost:3000/api/movie?title=${searchParams.title || ""}`
  );

  if (error) return <div className="text-3xl text-red-700">Error</div>;
  if (loading) return <div className="text-3xl text-teal-600 ">Loading...</div>;
  return (
    <div className="container mx-auto px-4 md:container md:mx-auto">
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-4">
        {movies?.map((movie) => (
          <MyImageCard
            key={movie.id}
            movie={movie}
            customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
          />
        ))}
      </div>
    </div>
  );
}
