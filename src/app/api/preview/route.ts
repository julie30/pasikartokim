import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const key = formData.get("key");

  const previewKey = process.env.PASIKARTOKIM_PREVIEW_KEY;

  if (!previewKey || key !== previewKey) {
    return NextResponse.redirect(
      new URL("/perziura", request.url),
      303
    );
  }

  const response = NextResponse.redirect(
    new URL("/", request.url),
    303
  );

  response.cookies.set("pasikartokim_preview", previewKey, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  return response;
}