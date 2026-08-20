import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type SuggestionBody = {
  name?: string;
  contactMethod?: "email" | "phone";
  email?: string;
  phone?: string;
  city?: string;
  school?: string;
  suggestion?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SuggestionBody;

    const {
      name,
      contactMethod,
      email,
      phone,
      city,
      school,
      suggestion,
    } = body;

    if (!name?.trim() || !suggestion?.trim()) {
      return NextResponse.json(
        { error: "Užpildykite privalomus laukus." },
        { status: 400 }
      );
    }

    if (contactMethod !== "email" && contactMethod !== "phone") {
      return NextResponse.json(
        { error: "Pasirinkite kontaktavimo būdą." },
        { status: 400 }
      );
    }

    if (contactMethod === "email" && !email?.trim()) {
      return NextResponse.json(
        { error: "Įveskite el. pašto adresą." },
        { status: 400 }
      );
    }

    if (contactMethod === "phone" && !phone?.trim()) {
      return NextResponse.json(
        { error: "Įveskite telefono numerį." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error("Trūksta SMTP aplinkos kintamųjų.");

      return NextResponse.json(
        { error: "Šiuo metu pasiūlymo išsiųsti nepavyko." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const contact =
      contactMethod === "email"
        ? `El. paštas: ${email}`
        : `Telefonas: ${phone}`;

    await transporter.sendMail({
      from: `"Pasikartokim.lt" <${smtpUser}>`,
      to: "labas@pasikartokim.lt",
      replyTo:
        contactMethod === "email" && email
          ? email
          : undefined,
      subject: "Naujas pasiūlymas Pasikartokim.lt",
      text: [
        `Vardas: ${name.trim()}`,
        contact,
        `Miestas: ${city?.trim() || "Nenurodytas"}`,
        `Mokykla: ${school?.trim() || "Nenurodyta"}`,
        "",
        "Pasiūlymas:",
        suggestion.trim(),
      ].join("\n"),
    });

    return NextResponse.json(
      { message: "Pasiūlymas sėkmingai išsiųstas." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Pasiūlymo siuntimo klaida:", error);

    return NextResponse.json(
      { error: "Pasiūlymo išsiųsti nepavyko." },
      { status: 500 }
    );
  }
}