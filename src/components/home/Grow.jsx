import React from "react";
import ServiceCard from "../common/ServiceCard";

export default function Grow() {
  return (
    <section className="w-full bg-white">
      <div className="container py-10 sm:py-14 lg:py-16">
        {/* Top content */}
        <div className="grid items-center gap-6 lg:grid-cols-[420px_20px_1fr]">
          {/* Left Title */}
          <div data-aos="fade-right" data-aos-duration="900" className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold leading-snug text-gray-900 sm:text-4xl">
              Grow Your Business <br />
              With <span className="text-brandColor">Go Digital</span>
            </h2>
          </div>

          {/* Divider Line */}
          <div className="hidden h-16 w-0.5 bg-red-500 lg:block" />

          {/* Right Text */}
          <div data-aos="fade-left" data-aos-duration="900" className="text-center lg:text-left">
            <p className="text-sm leading-6 text-gray-500 sm:text-base">
              You're looking to increase your online visibility, generate more
              leads, or improve your brand image, Go Digital has the tools and
              expertise to help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
            <ServiceCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
