import React from "react";
import {
  Facebook,
  Linkedin,
  Youtube,
  Dribbble,
  Pin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import SlidingAccent from "../common/SlidingAccent"; // ✅ same accent you made (optional)

export default function Footer() {
  const socials = [
    { icon: Facebook, href: "#", label: "Facebook", className: "bg-[#1877F2]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", className: "bg-[#0A66C2]" },
    { icon: Youtube, href: "#", label: "YouTube", className: "bg-[#FF0000]" },
    { icon: Dribbble, href: "#", label: "Dribbble", className: "bg-[#EA4C89]" },
    { icon: Pin, href: "#", label: "Pinterest", className: "bg-[#E60023]" },
  ];

  const policies = [
    "আমাদের সম্পর্কে",
    "গোপনীয়তা ও নীতিমালা",
    "শর্তাবলী",
    "অর্থ ফেরত নীতি",
    "পরিষেবা প্রদান নীতি",
    "ট্রেড লাইসেন্স",
  ];

  const services = [
    "Digital Marketing",
    "Graphics Design",
    "Photoshop Editing",
    "Video & Animation",
    "Website Design",
  ];

  return (
    <footer className="w-full bg-[#111111] text-white">
      <div className="container">
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-4 lg:gap-14 lg:py-16">
          {/* Brand Card */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="rounded-sm bg-[#1B1B1B] p-6 shadow-sm"
          >
            {/* Logo (text-based placeholder) */}
            <div className="text-2xl font-extrabold">
              <span className="text-brandColor">GO</span>{" "}
              <span className="tracking-wide">DIGITAL</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/60">
              Go Digital has all the resources you require to expand your business
              through digital marketing.
            </p>

            <h4 className="mt-6 text-base font-extrabold text-white/80">
              Follow us
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${s.className} transition hover:opacity-90`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </a>
                );
              })}
              {/* Extra small icon at end (like screenshot) */}
              <a
                href="#"
                aria-label="More"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 transition hover:opacity-90"
              >
                <span className="text-xs font-extrabold">M</span>
              </a>
            </div>
          </div>

          {/* Policies */}
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
            <h4 className="text-lg font-extrabold text-white/80">নীতিমালা</h4>

            {/* accent */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-1 w-10 bg-brandColor" />
              <span className="h-1 w-5 bg-brandColor opacity-60" />
              <span className="h-1 w-3 bg-brandColor opacity-30" />
            </div>

            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {policies.map((p) => (
                <li key={p}>
                  <a href="#" className="transition hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="160" data-aos-duration="900">
            <h4 className="text-lg font-extrabold text-white/80">Services</h4>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-1 w-10 bg-brandColor" />
              <span className="h-1 w-5 bg-brandColor opacity-60" />
              <span className="h-1 w-3 bg-brandColor opacity-30" />
            </div>

            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="transition hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="220" data-aos-duration="900">
            <h4 className="text-lg font-extrabold text-white/80">Contact Us</h4>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-1 w-10 bg-brandColor" />
              <span className="h-1 w-5 bg-brandColor opacity-60" />
              <span className="h-1 w-3 bg-brandColor opacity-30" />
            </div>

            <ul className="mt-6 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-white/60" />
                <a href="tel:+8809613823923" className="transition hover:text-white">
                  +880 9613-823923
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-white/60" />
                <a
                  href="mailto:info@godigitalcom.bd"
                  className="transition hover:text-white"
                >
                  info@godigitalcom.bd
                </a>
              </li>

              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-white/60" />
                <div className="leading-6">
                  House # 1 (Level 1) <br />
                  Road # 1, Nikunja 2, <br />
                  Dhaka - 1229 <br />
                  Bangladesh
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#1B1B1B]">
        <div className="container py-5 text-center text-xs text-white/60 sm:text-sm">
          Copyright © 2026 Go Digital. All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
