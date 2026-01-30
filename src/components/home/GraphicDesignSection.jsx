import React from "react";
import {
  PhoneCall,
  LayoutGrid,
  Printer,
  Image as ImageIcon,
  PenTool,
  ShoppingBag,
} from "lucide-react";
import graphicDesign from "../../assets/img/Graphic-Design.png";

export default function GraphicDesignSection() {
  const servicesLeft = [
    {
      icon: <LayoutGrid className="h-5 w-5 text-brandColor" />,
      label: "Logo & Identity",
    },
    {
      icon: <ImageIcon className="h-5 w-5 text-brandColor" />,
      label: "Photoshop Editing",
    },
    {
      icon: <ShoppingBag className="h-5 w-5 text-brandColor" />,
      label: "Product & Merchandise",
    },
  ];

  const servicesRight = [
    { icon: <Printer className="h-5 w-5 text-brandColor" />, label: "Print Design" },
    { icon: <PenTool className="h-5 w-5 text-brandColor" />, label: "Art & Illustration" },
    { icon: null, label: "More Details »", isLink: true },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="900">
            <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Building Brand Identity with <br className="hidden sm:block" />
              Professional <span className="text-brandColor">Graphic Design</span>
            </h2>

            {/* Accent line */}
            <div className="mt-4 flex items-center gap-2">
              <span className="h-1 w-12 bg-brandColor" />
              <span className="h-1 w-6 bg-brandColor opacity-60" />
              <span className="h-1 w-3 bg-brandColor opacity-30" />
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Go Digital offer custom-branded professional graphic design services in
              Bangladesh. If you are looking for an eye-catching design for your
              business or product that leaves an impression in customers’ minds, we
              can do it for you!
            </p>

            {/* Services list */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                {servicesLeft.map((item, idx) => (
                  <div
                    key={item.label}
                    data-aos="fade-up"
                    data-aos-delay={100 + idx * 80}
                    data-aos-duration="800"
                    className="flex items-center gap-3"
                  >
                    {item.icon}
                    <span className="text-sm font-medium text-gray-700 sm:text-base">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {servicesRight.map((item, idx) => (
                  <div
                    key={item.label}
                    data-aos="fade-up"
                    data-aos-delay={160 + idx * 80}
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
                  Would you like to take advantage of our services?
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
              src={graphicDesign}
              alt="Graphic Design"
              className="w-full max-w-sm object-contain sm:max-w-xl lg:max-w-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
