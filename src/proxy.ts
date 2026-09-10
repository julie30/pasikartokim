import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const previewKey = process.env.PASIKARTOKIM_PREVIEW_KEY;

  const hasPreviewAccess =
    previewKey &&
    request.cookies.get("pasikartokim_preview")?.value === previewKey;

  // Techniniai failai ir viešai leidžiami puslapiai
  const isPublicPath =
    pathname === "/ruosiama" ||
    pathname === "/perziura" ||
    pathname.startsWith("/api/preview") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname === "/favicon.ico";

  // Jei turi privačią peržiūros prieigą – leidžiame matyti tikrą svetainę
  if (hasPreviewAccess) {
    const response = NextResponse.next();

    response.headers.set("X-Robots-Tag", "noindex, nofollow");

    return response;
  }

  // Leidžiame veikti "Ruošiama", peržiūros prisijungimui
  // ir techniniams failams
  if (isPublicPath) {
    const response = NextResponse.next();

    response.headers.set("X-Robots-Tag", "noindex, nofollow");

    return response;
  }

  // Visi kiti lankytojai nukreipiami į "Ruošiama"
  const url = request.nextUrl.clone();

  url.pathname = "/ruosiama";
  url.search = "";

  const response = NextResponse.redirect(url);

  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  return response;
}