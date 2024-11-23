import React from "react";

interface Props {
  img: string;
  title: string;
  subtitle: string;
  p: string;
}

export default function FadeCard({ img, title, subtitle, p }: Props) {
  return (
    <>
      <div className="flex w-96 h-32 bg-foreground rounded-lg shadow-md overflow-hidden">
        {/* Left side with fading image */}
        <div className="relative w-1/3">
          <div className="absolute inset-0">
            <img
              src={img}
              alt="Card image"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
        </div>

        {/* Right side content */}
        <div className="w-2/3 p-3 flex flex-col">
          <h2 className="text-lg font-bold text-gray-800 mb-0.5">{title}</h2>
          <h3 className="text-xs font-medium text-gray-600 mb-1">{subtitle}</h3>
          <p className="text-xs text-gray-500 line-clamp-2">{p}</p>
        </div>
      </div>
      <div className="px-2"></div>
    </>
  );
}
