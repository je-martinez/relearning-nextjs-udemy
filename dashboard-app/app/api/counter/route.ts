import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ method: request.method, count: 100 });
}
