import React from "react";
import { CheckCircle2, Phone } from "lucide-react";
import cloud from "../../assets/img/Digital-Marketing.png";

export default function DigitalMarketingService() {
  return (
    <section className="w-full bg-white">
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="flex justify-center lg:justify-start"
          >
            <img
              src={cloud}
              alt="Digital Marketing"
              className="w-full max-w-sm object-contain sm:max-w-md lg:max-w-lg"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" data-aos-duration="900">
            <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              <span className="text-brandColor">Get Digital Marketing</span>{" "}
              Service
              <br className="hidden sm:block" />
              For Boost Your Business
            </h2>

            {/* Accent line */}
            <div className="mt-4 flex items-center gap-2">
              <span className="h-1 w-12 bg-brandColor" />
              <span className="h-1 w-6 bg-brandColor opacity-60" />
              <span className="h-1 w-3 bg-brandColor opacity-30" />
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Digital marketing is a great tool for reaching out to prospects and
              consumers for businesses of all sizes. People use the internet to
              find, learn about, follow, and purchase from companies, so if you're
              not on platform like Facebook, Instagram, and LinkedIn, you're
              missing out!
            </p>

            {/* Feature list */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Content Marketing",
                "Graphics Design For Marketing",
                "Social Media Marketing",
                "Video Editing And Animation",
              ].map((item, idx) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={100 + idx * 80}
                  data-aos-duration="800"
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brandColor" />
                  <span className="text-sm font-medium text-gray-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-8 h-px w-full bg-gray-200" />

            {/* Bottom actions */}
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <button
                data-aos="zoom-in"
                data-aos-delay="150"
                className="w-full rounded-md bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-800 sm:w-auto"
              >
                MORE DETAILS
              </button>

              <div
                data-aos="fade-left"
                data-aos-delay="220"
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white">
                  <Phone className="h-5 w-5 text-brandColor" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Need any help?</p>
                  <a
                    href="tel:+8809613823923"
                    className="text-sm font-extrabold text-gray-900 sm:text-base"
                  >
                    +880 9613-823923
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
}
