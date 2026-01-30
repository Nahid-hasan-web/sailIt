import React from "react";
import cloud from "../../assets/img/cloud.png";

export default function ContactCTA() {
  return (
    <section className="group relative w-full overflow-hidden bg-[#0a4ea3]">
      {/* Glassy Hover Lines */}
      <span className="pointer-events-none absolute left-0 top-0 h-full w-30 -translate-x-[150%] skew-x-[-20deg] bg-white/20 blur-md transition-all duration-700 group-hover:translate-x-[900%]"></span>

      <span className="pointer-events-none absolute right-0 top-0 h-full w-30 translate-x-[150%] skew-x-5 bg-white/20 blur-md transition-all duration-700 group-hover:-translate-x-[900%]"></span>

      {/* Clouds */}
      <img
        src={cloud}
        alt="cloud"
        className="pointer-events-none absolute left-6 top-6 w-20 opacity-60 sm:left-10 sm:top-8 sm:w-24"
      />
      <img
        src={cloud}
        alt="cloud"
        className="pointer-events-none absolute left-2 top-24 w-14 opacity-50 sm:left-8 sm:top-32 sm:w-16"
      />
      <img
        src={cloud}
        alt="cloud"
        className="pointer-events-none absolute right-10 top-8 w-16 opacity-55 sm:right-16 sm:top-10 sm:w-20"
      />
      <img
        src={cloud}
        alt="cloud"
        className="pointer-events-none absolute right-6 top-24 w-24 opacity-55 sm:right-10 sm:top-32 sm:w-28"
      />

      {/* Content */}
      <div className="container py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            data-aos="fade-down"
            data-aos-duration="900"
            className="text-2xl font-extrabold leading-snug text-white sm:text-3xl lg:text-4xl"
          >
            Looking for professional digital <br className="hidden sm:block" />
            marketing services for your business?
          </h2>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:mt-9 sm:flex-row sm:gap-6">
            <a
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="900"
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brandColor px-7 py-3 text-sm font-bold text-white transition hover:bg-brandColor/90 focus:outline-none focus:ring-4 focus:ring-brandColor/30"
            >
              CONTACT US
            </a>

            <a
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="900"
              href="tel:+8809613823923"
              className="text-lg font-extrabold tracking-wide text-white sm:text-xl"
            >
              +880 9613-823923
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
