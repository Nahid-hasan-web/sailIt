"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";

import Link from "next/link";
import {
  HiChevronDown,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

const socialItems = [
  { socialIocn: FaFacebookF, socialLink: "#" },
  { socialIocn: FaLinkedinIn, socialLink: "#" },
  { socialIocn: FaYoutube, socialLink: "#" },
  { socialIocn: FaInstagram, socialLink: "#" },
];

export default function HeaderWithNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);
  const [openDesktop, setOpenDesktop] = useState(null);

  const headerRef = useRef(null);

  const navItems = useMemo(
    () => [
      {
        label: "Digital Marketing",
        href: "/digital-marketing",
        children: [
          { label: "SEO", href: "/digital-marketing/seo" },
          { label: "Social Media Marketing", href: "/digital-marketing/smm" },
          { label: "PPC Advertising", href: "/digital-marketing/ppc" },
        ],
      },
      {
        label: "Graphics Design",
        href: "/graphics-design",
        children: [
          { label: "Logo Design", href: "/graphics-design/logo" },
          { label: "Brand Identity", href: "/graphics-design/branding" },
          { label: "Social Media Design", href: "/graphics-design/social" },
        ],
      },
      {
        label: "Video & Animation",
        href: "/video-animation",
        children: [
          { label: "Motion Graphics", href: "/video-animation/motion" },
          { label: "Explainer Video", href: "/video-animation/explainer" },
          { label: "Video Editing", href: "/video-animation/editing" },
        ],
      },
      {
        label: "Website Design",
        href: "/website-design",
        children: [
          { label: "UI/UX Design", href: "/website-design/uiux" },
          { label: "Landing Page", href: "/website-design/landing" },
          { label: "Ecommerce Website", href: "/website-design/ecommerce" },
        ],
      },
      {
        label: "Email",
        href: "/email",
        children: [
          { label: "Email Marketing", href: "/email/marketing" },
          { label: "Automation", href: "/email/automation" },
          { label: "Templates", href: "/email/templates" },
        ],
      },
      { label: "Contact", href: "/contact" },
    ],
    [],
  );

  useEffect(() => {
    const onDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDesktop(null);
        setActiveMobile(null);
      }
    };
    const onClick = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) setOpenDesktop(null);
    };

    window.addEventListener("keydown", onDown);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveMobile(null);
  };

  return (
    <header ref={headerRef} className="w-full font-poppins">
      {/* TOP BAR */}
      <div className="bg-neutral-950 text-white/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 py-2 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px]">
              <a
                href="mailto:info@godigital.com.bd"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <HiOutlineMail className="text-[14px]" />
                <span>info@godigital.com.bd</span>
              </a>

              <a
                href="tel:+8809613823923"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <HiOutlinePhone className="text-[14px]" />
                <span>+880 9613-823923</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[12px] text-white/70">Follow us</span>
              <div className="flex items-center gap-2">
                {socialItems.map((item, i) => {
                  const Icon = item.socialIocn;
                  return (
                    <a
                      key={i}
                      href={item.socialLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-white/30 hover:text-brandColor"
                      aria-label="social"
                    >
                      <Icon className="text-[14px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-white/90 backdrop-blur border-b border-neutral-200/70">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Go Digital"
                priority
                className="w-20 h-20"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => {
                  const hasChildren = !!item.children?.length;
                  const isOpen = openDesktop === item.label;

                  return (
                    <li key={item.label} className="relative">
                      <div
                        onMouseEnter={() =>
                          hasChildren ? setOpenDesktop(item.label) : null
                        }
                        onMouseLeave={() => setOpenDesktop(null)}
                      >
                        <Link
                          href={item.href}
                          className="rounded-full px-4 py-2 text-[14px] font-semibold text-neutral-900 transition hover:bg-neutral-100 hover:text-brandColor"
                          onFocus={() =>
                            hasChildren ? setOpenDesktop(item.label) : null
                          }
                        >
                          <span className="inline-flex items-center gap-1.5">
                            {item.label}
                            {hasChildren && (
                              <HiChevronDown className="text-[16px] opacity-70" />
                            )}
                          </span>
                        </Link>

                        {hasChildren && (
                          <div
                            className={`absolute left-0 top-full pt-3 transition ${
                              isOpen
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-1 pointer-events-none"
                            }`}
                          >
                            <div className="w-[280px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]">
                              <div className="px-4 py-3 border-b border-neutral-100">
                                <p className="text-[12px] font-semibold text-neutral-500">
                                  {item.label}
                                </p>
                              </div>
                              <ul className="p-2">
                                {item.children.map((c) => (
                                  <li key={c.label}>
                                    <Link
                                      href={c.href}
                                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium text-neutral-700 transition hover:bg-neutral-50 hover:text-brandColor"
                                      onClick={() => setOpenDesktop(null)}
                                    >
                                      <span>{c.label}</span>
                                      <span className="text-[11px] text-neutral-400">
                                        View
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                className="ml-3 inline-flex w-30 px-3 py-2 items-center justify-center rounded-[5px] bg-brandColor text-[13px] font-semibold text-white shadow-sm hover:opacity-95 transition"
              >
                Get a Quote
              </Link>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 hover:bg-neutral-50"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <HiOutlineMenu className="text-[22px]" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-[380px] bg-white shadow-2xl transition-transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200">
            <Link href="/" onClick={closeMobile} className="flex items-center">
              <Image
                src="/logo.png"
                alt="Go Digital"
                width={160}
                height={42}
                className="h-8 w-auto"
              />
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 hover:bg-neutral-50"
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <HiOutlineX className="text-[22px]" />
            </button>
          </div>

          <div className="px-4 py-4">
            <ul className="divide-y divide-neutral-100">
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                const isActive = activeMobile === item.label;

                return (
                  <li key={item.label} className="py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="flex-1 py-3 text-[15px] font-semibold text-neutral-900"
                        onClick={() => {
                          if (!hasChildren) closeMobile();
                        }}
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-neutral-100"
                          onClick={() =>
                            setActiveMobile(isActive ? null : item.label)
                          }
                          aria-label="Toggle submenu"
                        >
                          <HiChevronDown
                            className={`text-[18px] transition-transform ${
                              isActive ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {hasChildren && (
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ${
                          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="pb-2">
                            {item.children.map((c) => (
                              <li key={c.label}>
                                <Link
                                  href={c.href}
                                  className="block py-2 pl-3 text-[13px] text-neutral-600 hover:text-brandColor"
                                  onClick={closeMobile}
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex  items-center justify-center rounded-2xl bg-brandColor px-5 py-3 text-[14px] font-semibold text-white hover:opacity-95
                 transition"
                onClick={closeMobile}
              >
                Get a Quote
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2">
                {socialItems.map((item, i) => {
                  const Icon = item.socialIocn;
                  return (
                    <a
                      key={i}
                      href={item.socialLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:text-brandColor transition"
                      aria-label="social"
                    >
                      <Icon className="text-[15px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
