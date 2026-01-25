"use client";
import React, { useMemo, useState } from "react";
import { HiChevronDown, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
const brandColor = "var(--brandColor)";
const roboto = "font-roboto";
const poppins = "font-poppins";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

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
          { label: "Editing", href: "/video-animation/editing" },
        ],
      },
      {
        label: "Website Design",
        href: "/website-design",
        children: [
          { label: "UI/UX Design", href: "/website-design/uiux" },
          { label: "Landing Page", href: "/website-design/landing" },
          { label: "Ecommerce", href: "/website-design/ecommerce" },
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

  return (
    <nav className={`w-full bg-white ${roboto}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-5">
          <a href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="sail it"
              className="w-15  h-15"
            />
          </a>

          <nav className="hidden lg:flex items-center justify-center flex-1">
            <ul className={`flex items-center gap-8 ${poppins}`}>
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                return (
                  <li key={item.label} className="relative group">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1 text-[15px] font-semibold text-neutral-900 hover:text-[var(--brandColor)] transition-colors"
                    >
                      {item.label}
                      {hasChildren && (
                        <HiChevronDown className="text-[16px] opacity-70 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>

                    {hasChildren && (
                      <div className="pointer-events-none absolute left-0 top-full pt-4 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                        <div className="min-w-[220px] rounded-xl border border-neutral-200 bg-white shadow-lg overflow-hidden">
                          <ul className="py-2">
                            {item.children.map((c) => (
                              <li key={c.label}>
                                <a
                                  href={c.href}
                                  className="block px-4 py-2.5 text-[14px] text-neutral-700 hover:bg-neutral-50 hover:text-[var(--brandColor)]"
                                >
                                  {c.label}
                                </a>
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
          </nav>

          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-900"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenu className="text-[22px]" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setOpen(false);
            setActive(null);
          }}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-white shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200">
            <a
              href="/"
              className="flex items-center gap-2"
              onClick={() => {
                setOpen(false);
                setActive(null);
              }}
            >
              <img src="/logo.png" alt="Go Digital" className="h-8 w-auto" />
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-900"
              onClick={() => {
                setOpen(false);
                setActive(null);
              }}
              aria-label="Close menu"
            >
              <HiOutlineX className="text-[22px]" />
            </button>
          </div>

          <div className={`px-2 py-2 ${poppins}`}>
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                const isActive = active === item.label;

                return (
                  <li key={item.label} className="border-b border-neutral-100">
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className="flex-1 px-3 py-3.5 text-[15px] font-semibold text-neutral-900 hover:text-[var(--brandColor)]"
                        onClick={() => {
                          if (!hasChildren) {
                            setOpen(false);
                            setActive(null);
                          }
                        }}
                      >
                        {item.label}
                      </a>

                      {hasChildren && (
                        <button
                          type="button"
                          className="px-3 py-3.5 text-neutral-700"
                          onClick={() =>
                            setActive(isActive ? null : item.label)
                          }
                          aria-label="Toggle dropdown"
                        >
                          <HiChevronDown
                            className={`text-[18px] transition-transform ${
                              isActive ? "rotate-180" : "rotate-0"
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
                          <ul className="pb-3">
                            {item.children.map((c) => (
                              <li key={c.label}>
                                <a
                                  href={c.href}
                                  className="block px-6 py-2 text-[14px] text-neutral-700 hover:text-[var(--brandColor)]"
                                  onClick={() => {
                                    setOpen(false);
                                    setActive(null);
                                  }}
                                >
                                  {c.label}
                                </a>
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
          </div>
        </div>
      </div>

      <style>{`
        :root { --brandColor: ${brandColor}; }
      `}</style>
    </nav>
  );
}
