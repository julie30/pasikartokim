"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__logo" href="/" aria-label="Pasikartokim.lt pradžia">
          <img src="/images/logo.svg" alt="Pasikartokim.lt" />
        </Link>

        <button
          className="site-header__toggle"
          type="button"
          aria-label={isMenuOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <nav
          id="main-menu"
          className={`site-header__nav ${isMenuOpen ? "site-header__nav--open" : ""}`}
          aria-label="Pagrindinė navigacija"
        >
          <Link href="#biblioteka" onClick={closeMenu}>
            Mokymosi biblioteka
          </Link>
          <Link href="#klases" onClick={closeMenu}>
            Klasės
          </Link>
          <Link href="#palaikyti-projekta" onClick={closeMenu}>
            Palaikyti projektą
          </Link>
        </nav>

        <div className="site-header__actions">
          <Link href="/prisijungimas">Prisijungti</Link>
          <Link href="/palaikyti-projekta">Palaikyti projektą</Link>
        </div>
      </div>
    </header>
  );
}