import { NextResponse } from "next/server";

const counterState = {
  count: 100,
};

export async function GET(request: Request) {
  return NextResponse.json({
    method: request.method,
    count: counterState.count,
  });
}

export async function POST(request: Request) {
  const { action, value } = await request.json();
  if (action === "increase") {
    counterState.count += value;
  } else if (action === "decrease") {
    counterState.count -= value;
  }
  return NextResponse.json({ count: counterState.count });
}
