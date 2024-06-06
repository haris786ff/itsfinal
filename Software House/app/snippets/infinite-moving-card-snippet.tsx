"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Visionary Leadership: Abdullah farooq brings visionary leadership and strategic thinking to Hitus marketing, steering the company towards innovation and growth",
    name: "ABDULLAH FAROOQ",
    title: "CEO",
  },
  {
    quote:
      "At Hitus marketing, we are guided by the vision and values of our founder, Hamza saeed, whose expertise and leadership have been the cornerstone of our success.",
    name: "HAMZA SAEED",
    title: "AMAZON SELLER & OWNER of the company",
  },
  {
    quote: "faizan khan is a passionate and creative TikTok Shop specialist dedicated to bringing you the latest and greatest products. With a keen eye for trends and a knack for discovering unique finds, faizan khan curates a diverse range of items to enhance your shopping experience.",
    name: "Muhammad Faizan Khan",
    title: "TIKTOK SHOPPING",
  },
  {
    quote:
      "Experienced Web Developer specializing in creating responsive and user-friendly websites,Offering custom web development solutions tailored to your business needs.",
    name: "MUHAMMAD HARIS ALI",
    title: "WEB DESIGNER & DEVELOPER",
  },
];
