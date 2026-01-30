import React, { useMemo, useRef, useState } from "react";
import SlidingAccent from "../common/SlidingAccent"; // ✅ adjust path if needed

function FaqItem({ q, a, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border border-gray-200 bg-white">
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-extrabold text-gray-900 sm:text-base">
          {q}
        </span>

        <span className="flex h-6 w-6 items-center justify-center">
          <span
            className={`text-xl font-bold ${isOpen ? "text-brandColor" : "text-brandColor"}`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </span>
      </button>

      {/* Smooth body */}
      <div
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight || 0}px`
            : "0px",
        }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <div ref={contentRef} className="px-5 pb-5">
          <p className="text-sm leading-7 text-gray-500 sm:text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = useMemo(
    () => [
      {
        q: "How does the design process work?",
        a: "We start with a short discussion to understand your goals, brand style, and requirements. Then we create initial concepts, share a proof, collect feedback, and refine until final approval.",
      },
      {
        q: "How long does it take to receive a design proof?",
        a: "Most proofs are delivered within 24–72 hours depending on complexity. Urgent requests can be prioritized if needed.",
      },
      {
        q: "What types of graphic design services do you provide?",
        a: "We provide logo & brand identity, social media creatives, product packaging, brochures/flyers, banners, UI assets, and custom illustrations—tailored to your business goals.",
      },
      {
        q: "How do you send final projects?",
        a: "We deliver via Google Drive/Dropbox link or email. You’ll receive all agreed formats (AI/PSD/PDF/PNG/JPG) plus source files if included in the package.",
      },
      {
        q: "Do you do printing?",
        a: "Yes—printing support is available for select items (business cards, brochures, packaging, etc.). We can guide you with print-ready files and vendor coordination.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState(2); // default open like screenshot

  return (
    <section className="w-full bg-white">
      <div className="container py-12 sm:py-16 lg:py-20">
        {/* Heading */}
        <div className="text-center">
          <h2
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Frequently Asked Question
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="900"
            className="mt-2 text-sm text-gray-500 sm:text-base"
          >
            Here are some frequently asked questions about of Go Digital
            services.
          </p>

          <div className="flex justify-center">
            <SlidingAccent />
          </div>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-10 w-full max-w-2xl space-y-3">
          {faqs.map((item, idx) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
