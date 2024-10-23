import { movies } from "@/Api";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title");
  const category = request.nextUrl.searchParams.get("category");

  if (category) {
    const searchMoviesByCategory = movies.filter(
      (movie) => movie.category.toLowerCase() === category.toLowerCase()
    );

    return NextResponse.json(searchMoviesByCategory);
  }

  if (title) {
    const searchMoviesByTitle = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    return NextResponse.json(searchMoviesByTitle);
  }
  return NextResponse.json(movies);
}
