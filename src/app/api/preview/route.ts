import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const key = formData.get("key");

  const previewKey = process.env.PASIKARTOKIM_PREVIEW_KEY;

  if (!previewKey || key !== previewKey) {
    return new NextResponse(null, {
      status: 303,
      headers: {
        Location: "/perziura",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  const response = new NextResponse(null, {
    status: 303,
    headers: {
      Location: "/",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });

  response.cookies.set("pasikartokim_preview", previewKey, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}