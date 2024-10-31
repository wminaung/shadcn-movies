import { redis } from "@/lib/redis";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ ok: "ok" }, { status: 200 });
}
