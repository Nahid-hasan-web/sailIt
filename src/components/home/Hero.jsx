import React from "react";
import banner1 from "../../assets/img/bannerimg1.png";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={banner1}
              alt="Digital Marketing Solutions"
              className="w-full max-w-lg object-contain"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              All-in-one <span className="text-blue-600">Digital</span>{" "}
              <span className="text-blue-600">Marketing</span> Solution in{" "}
              <span className="text-gray-900">Bangladesh</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base lg:mx-0">
              Go Digital is an industry-leading digital marketing solutions
              company.
              <br className="hidden sm:block" />
              At Go Digital, you may get everything you need for digital
              marketing.
              <br className="hidden sm:block" />
              Get in touch with us today to enjoy stress-free online marketing.
            </p>

            <div className="mt-7 flex justify-center lg:justify-start">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
