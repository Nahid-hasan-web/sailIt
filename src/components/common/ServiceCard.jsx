import React from "react";
import { ChevronRight } from "lucide-react";

export default function ServiceCard() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
      className="w-full max-w-full rounded-xl bg-white px-5 py-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg sm:max-w-[280px] sm:px-6 sm:py-10"
    >
      {/* Icon */}
      <div
        data-aos="zoom-in"
        data-aos-duration="900"
        data-aos-delay="200"
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center sm:mb-5 sm:h-16 sm:w-16"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135685.png"
          alt="Digital Marketing"
          className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        />
      </div>

      {/* Title */}
      <h3
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="250"
        className="text-lg font-bold text-gray-900 sm:text-xl"
      >
        Digital Marketing
      </h3>

      {/* Description */}
      <p
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="300"
        className="mt-3 text-sm leading-6 text-gray-500 sm:mt-4"
      >
        Digital marketing services enable your brand to advertise 24/7 at a
        reasonable cost. That help to reach your target audience.
      </p>

      {/* Read More */}
      <button
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="350"
        className="mt-5 inline-flex items-center justify-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:mt-6"
      >
        Read More <ChevronRight size={16} />
      </button>
    </div>
  );
}
