import React from "react";
import { Mail, Phone, User, AtSign, PenLine, FileText } from "lucide-react";
import SlidingAccent from "../common/SlidingAccent"; // ✅ adjust path if needed

export default function ContactSection() {
  return (
    <section className="w-full bg-white">
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="900">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
              Get Our <span className="text-brandColor">Amazing</span> Services!
            </h2>

            <div className="mt-4">
              <SlidingAccent />
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Go Digital offers eye-catching design &amp; digital marketing
              services for businesses and individuals. We are dedicated on our
              client&apos;s individual goals, with multiple results toward profits
              and advantages.
            </p>

            {/* Contact Info */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white">
                  <Phone className="h-5 w-5 text-gray-700" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-gray-900">
                    +880 9613-823923
                  </p>
                  <p className="text-xs text-gray-500">Give us a call</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white">
                  <Mail className="h-5 w-5 text-gray-700" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-gray-900">
                    info@godigital.com.bd
                  </p>
                  <p className="text-xs text-gray-500">24/7 online support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div data-aos="fade-left" data-aos-duration="900">
            <form className="w-full">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brandColor" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-12 w-full rounded-md border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-brandColor"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brandColor" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 w-full rounded-md border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-brandColor"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brandColor" />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-12 w-full rounded-md border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-brandColor"
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brandColor" />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="h-12 w-full rounded-md border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-brandColor"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative mt-5">
                <PenLine className="absolute left-4 top-4 h-4 w-4 text-brandColor" />
                <textarea
                  rows="4"
                  placeholder="Write Message"
                  className="w-full resize-none rounded-md border border-gray-200 bg-white pl-11 pr-4 pt-3 text-sm text-gray-700 outline-none transition focus:border-brandColor"
                ></textarea>
              </div>

              {/* Button */}
              <div className="mt-6 flex justify-center sm:justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-brandColor px-10 py-3 text-sm font-extrabold text-white transition hover:opacity-90"
                >
                  SEND US
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
