"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Button from "./shared/Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const handleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width >= 768) {
      setMenuOpen(false);
    }
  }, [width]);

  return (
    <header>
      {/* LOGO */}
      <div className="logo">
        <div className="logo-icon__container">
          <Image
            src="/assets/icons/logo.png"
            width={14}
            height={14}
            alt="logo"
            className="logo-icon"
          />
        </div>
        <h1>LocalWeb</h1>
      </div>

      {/* DESKTOP NAV */}
      <nav className="desktop-nav">
        <ul className="desktop-nav__links">
          <li>
            <Link href="/" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* OPEN MOBILE MENU BTN */}
      <Button className="nav-btn__mobile" handleClick={handleOpenMenu}></Button>

      {/* MOBILE NAV */}
      {menuOpen && (
        <nav className="mobile-nav">
          <ul className="mobile-nav__links">
            <li>
              <Link href="/" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/" className="nav-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <Button className={`btn-primary mobile-nav-btn`}>Call Now</Button>
        </nav>
      )}

      {/* CTA BTN - DESKTOP */}
      <Button className={`btn-primary nav-btn`}>Call Now</Button>
    </header>
  );
}
