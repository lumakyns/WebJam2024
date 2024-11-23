"use client";
import React, { useState } from "react";

interface funcProp {
  filled: boolean;
  className: string;
}

interface Props {
  img: string;
  text: string;
}

const HeartIcon = ({ filled, className }: funcProp) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const BookmarkIcon = ({ filled, className }: funcProp) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

export default function InteractiveCard({ img, text }: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <>
      <div className="px-2" />
      <div className="w-72 bg-foreground rounded-lg shadow-lg overflow-hidden">
        <img src={img} alt="Card image" className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <HeartIcon
                filled={isLiked}
                className={`h-6 w-6 transition-colors ${
                  isLiked ? "text-red-500" : "text-gray-500"
                }`}
              />
            </button>
            <p className="flex-1 text-gray-700">{text}</p>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <BookmarkIcon
                filled={isSaved}
                className={`h-6 w-6 transition-colors ${
                  isSaved ? "text-blue-500" : "text-gray-500"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
