import React from "react";
import {
  UserRound,
  Lightbulb,
  Handshake,
  Sparkles,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";
import SlidingAccent from "../common/SlidingAccent"; // ✅ change path if needed

function WhyItem({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="900"
      className="flex gap-4"
    >
      {/* Icon */}
      <div className="shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <Icon className="h-6 w-6 text-brandColor" />
        </div>
      </div>

      {/* Text */}
      <div>
        <h4 className="text-base font-extrabold text-gray-900 sm:text-lg">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function WhySelect() {
  const items = [
    {
      icon: UserRound,
      title: "Client-centric approach",
      desc: "At Go Digital, the professional team carefully examines client's individual marketplace. They are dedicated to client's individual goals, profits and advantages.",
    },
    {
      icon: Lightbulb,
      title: "Creative approach",
      desc: "We understand that creativity is the heart of any design and marketing strategy. As a result, we work hard to maintain design and content as innovative, intuitive, insightful, and transparent as possible.",
    },
    {
      icon: Handshake,
      title: "Reliability",
      desc: "Go Digital has been offering digital marketing, video editing & animation, graphic design & website design services for a long time. 99% of clients are satisfied with us.",
    },
    {
      icon: Sparkles,
      title: "Unique, fresh, and optimized",
      desc: "Go Digital has some special and unique features that can help you stand out from the crowd. As a result, you can rely on our innovative and optimized design to outperform your competition.",
    },
    {
      icon: BadgeDollarSign,
      title: "Cost effective approach",
      desc: "We offer our services to businesses of all sizes. We ensure that client's goals are achieved without overspending.",
    },
    {
      icon: Headphones,
      title: "24/7 expert support",
      desc: "If you have any problems with our services, our professional support team is always available to assist you.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container py-12 sm:py-16 lg:py-20">
        {/* Heading */}
        <div className="text-center">
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-xs font-semibold tracking-widest text-gray-400"
          >
            REASON BEHIND OUR CONFIDENCE
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="900"
            className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Why Select <span className="text-brandColor">Go Digital?</span>
          </h2>

          {/* ✅ Sliding Accent Component */}
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="900">
            <SlidingAccent />
          </div>
        </div>

        {/* Items */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2 md:gap-x-14">
          {items.map((item, i) => (
            <WhyItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              delay={100 + i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
