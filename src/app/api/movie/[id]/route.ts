import { movies } from "@/Api";
import { ParamsProps } from "@/types/base";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: ParamsProps) {
  const id = params.id;
  const searchMovie = movies.filter(
    (movie) => String(movie.id) === params.id
  )[0];

  if (!searchMovie) {
    return NextResponse.json(
      { message: `Theres is no movie for id=${id}` },
      { status: 404 }
    );
  }

  return NextResponse.json(searchMovie);
}
