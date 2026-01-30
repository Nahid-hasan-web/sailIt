import React from "react";
import { Mail, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Replace with your WhatsApp number (with country code, no +)
  const whatsappNumber = "8809613823923";

  // ✅ Replace message if you want
  const whatsappMessage = "Hello! I need help with your services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll Top */}
      <button
        onClick={handleScrollTop}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white shadow-md transition hover:opacity-90"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-md transition hover:opacity-90"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M19.11 17.23c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.64 1.11 2.82c.13.18 1.9 2.9 4.61 4.07.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M26.66 5.34A13.21 13.21 0 0016.02 1.8C8.76 1.8 2.86 7.7 2.86 14.96c0 2.32.61 4.58 1.78 6.57L2.74 30.2l8.85-1.84a13.14 13.14 0 004.43.77h.01c7.26 0 13.16-5.9 13.16-13.16 0-3.51-1.37-6.81-3.53-9.03zm-10.64 21.6h-.01a10.9 10.9 0 01-4.17-.83l-.3-.12-5.25 1.09 1.12-5.12-.2-.33a10.87 10.87 0 01-1.67-5.67c0-6.01 4.89-10.9 10.9-10.9 2.91 0 5.64 1.13 7.7 3.2a10.83 10.83 0 013.19 7.7c0 6.01-4.89 10.9-10.91 10.9z" />
        </svg>
      </a>

      {/* Mail */}
      <a
        href="mailto:info@godigital.com.bd"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brandColor text-white shadow-md transition hover:opacity-90"
        aria-label="Send email"
      >
        <Mail className="h-6 w-6" />
      </a>
    </div>
  );
}
