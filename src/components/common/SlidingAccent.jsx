import React from "react";

export default function SlidingAccent() {
  return (
    <div className=" mt-4 flex w-20 items-center gap-2">
      {/* custom animation css */}
      <style>{`
        @keyframes slidePulse {
          0%   { transform: translateX(0); opacity: 1; }
          50%  { transform: translateX(10px); opacity: .6; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>

      <span className="h-1 w-10 bg-brandColor" />
      <span
        className="h-1 w-6 bg-brandColor opacity-60"
        style={{ animation: "slidePulse 1.2s ease-in-out infinite" }}
      />
      <span
        className="h-1 w-3 bg-brandColor opacity-30"
        style={{ animation: "slidePulse 1.2s ease-in-out infinite 0.2s" }}
      />
    </div>
  );
}
