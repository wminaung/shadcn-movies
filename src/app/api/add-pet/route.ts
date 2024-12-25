import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ movies: 2 }, { status: 200 });
}
