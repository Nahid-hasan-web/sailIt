import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import { Quote } from "lucide-react";
import SlidingAccent from "../common/SlidingAccent";
// import SlidingAccent from "../common/SlidingAccent"; // ✅ if you want the moving line
// import chartImg from "../../assets/img/your-chart.png"; // ❌ not needed (we're using real chart)

export default function MarketingAndTestimonials() {
  const chartData = useMemo(
    () => [
      { year: "2010", users: 2.0 },
      { year: "2015", users: 3.2 },
      { year: "2020", users: 4.5 },
      { year: "2021", users: 4.9 },
      { year: "2022", users: 5.0 },
      { year: "2023", users: 5.3 },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Aditya roy",
        role: "CLIENT",
        text: "We used Go Digital services for our company's logo design. Their interactions were personable and professional.",
      },
      {
        name: "Mariam Khan",
        role: "CLIENT",
        text: "Great experience! The team delivered on time and the communication was smooth throughout the project.",
      },
      {
        name: "Rahim Ahmed",
        role: "CLIENT",
        text: "Excellent support and quality work. We saw a noticeable improvement after working with them.",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section className="w-full bg-white">
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Top: Text */}
          <div className="space-y-5">
            <div data-aos="fade-up" data-aos-duration="900">
              <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                Utilize <span className="text-brandColor">Online Marketing</span>{" "}
                to
                <br className="hidden sm:block" />
                Reach Your Target Audience
              </h2>

              <div className="flex justify-center">

              <SlidingAccent/>
              </div>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="900"
              className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base"
            >
              The global population of internet users is growing by the day. You
              can swiftly present your business online if you want to take it to
              the next level. Your income will rise as your company's brand
              rises. Because the number of Internet users is expected to exceed
              5.3 billion between 2018 and 2023, contact us to display your
              company online.
            </p>
          </div>

          {/* Right Top: Chart */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="w-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-6"
          >
            <div className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold text-gray-400">
              <span className="h-2 w-8 rounded bg-brandColor opacity-30" />
              <span># Global Online Users</span>
            </div>

            <div className="h-56 w-full sm:h-64 lg:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} domain={[0, 7]} />
                  <Tooltip />
                  <Bar
                    dataKey="users"
                    fill="currentColor"
                    className="text-brandColor opacity-30"
                    radius={[6, 6, 0, 0]}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="currentColor"
                    className="text-brandColor"
                    strokeWidth={2}
                    dot={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Left Bottom: Illustration placeholder (you can replace with image) */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-lg bg-gray-50 p-6 text-center text-sm text-gray-400">
              Replace this box with your illustration image (tablet feedback).
            </div>
          </div>

          {/* Right Bottom: Testimonial */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="relative rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
          >
            <p className="text-xs font-semibold tracking-widest text-gray-400">
              CLIENT&apos;S LOVE
            </p>

            <h3 className="mt-3 text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
              What our <span className="text-brandColor">clients thinking</span>
              <br className="hidden sm:block" />
              about our services
            </h3>

            {/* Big quote */}
            <div className="pointer-events-none absolute right-6 top-20 hidden sm:block">
              <Quote className="h-14 w-14 text-gray-200" />
            </div>

            <div className="mt-8">
              <p className="text-sm font-extrabold text-gray-900 sm:text-base">
                {testimonials[active].name}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-widest text-gray-400">
                {testimonials[active].role}
              </p>

              <p className="mt-5 text-sm italic leading-7 text-gray-500 sm:text-base">
                {testimonials[active].text}
              </p>
            </div>

            {/* Dots */}
            <div className="mt-8 flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    active === i ? "bg-gray-900" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}

              <button
                onClick={next}
                className="ml-3 rounded-md border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
