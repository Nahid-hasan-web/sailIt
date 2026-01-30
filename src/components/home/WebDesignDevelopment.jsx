import React from "react";
import { PhoneCall, Code2, ShoppingCart, BriefcaseBusiness } from "lucide-react";
import webDesign from "../../assets/img/Web-Design-Development.png";

export default function WebDesignDevelopment() {
  const services = [
    { icon: <Code2 className="h-5 w-5 text-brandColor" />, label: "Business Website" },
    { icon: <ShoppingCart className="h-5 w-5 text-brandColor" />, label: "E-commerce Website" },
    { icon: <BriefcaseBusiness className="h-5 w-5 text-brandColor" />, label: "Corporate Website" },
    { icon: null, label: "More Details »", isLink: true },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="900">
            <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Best <span className="text-brandColor">Web Design &amp;</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-brandColor">Development</span> Service in{" "}
              <br className="hidden sm:block" />
              Bangladesh
            </h2>

            {/* Accent line */}
            <div className="mt-4 flex items-center gap-2">
              <span className="h-1 w-12 bg-brandColor" />
              <span className="h-1 w-6 bg-brandColor opacity-60" />
              <span className="h-1 w-3 bg-brandColor opacity-30" />
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Having a website is very essential for any business in the world. It
              needs to be professional. It needs to be attractive. But most
              importantly, it needs to work. Go Digital is a web development
              company in Bangladesh that offers quality web development services
              that allows you to stand in front of any competitor.
            </p>

            {/* Services list */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((item, idx) => (
                <div
                  key={item.label}
                  data-aos="fade-up"
                  data-aos-delay={100 + idx * 80}
                  data-aos-duration="800"
                  className="flex items-center gap-3"
                >
                  {item.icon ? item.icon : <span className="h-5 w-5" />}

                  {item.isLink ? (
                    <a
                      href="#"
                      className="text-sm font-semibold text-gray-600 transition hover:text-brandColor sm:text-base"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-gray-700 sm:text-base">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-8 h-px w-full bg-gray-200" />

            {/* Phone row */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white">
                <PhoneCall className="h-5 w-5 text-gray-700" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Would you like to take advantage of Go Digital&apos;s services?
                </p>
                <a
                  href="tel:+8809613823923"
                  className="text-sm font-extrabold text-gray-900 sm:text-base"
                >
                  Phone: +880 9613-823923
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="flex justify-center lg:justify-end"
          >
            <img
              src={webDesign}
              alt="Web Design and Development"
              className="w-full max-w-sm object-contain sm:max-w-xl lg:max-w-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
