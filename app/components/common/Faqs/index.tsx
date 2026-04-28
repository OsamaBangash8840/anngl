// Updated Testimonial Carousel with Half Slides on Left and Right
"use client";

import React, { useState } from "react";
import {  GoPlus } from "react-icons/go";
import { Typography } from "../Typography";
import { FiMinus } from "react-icons/fi";


const data = [
  {
    question: "How do I get a quote for my move?",
    answer: "You can get a quote by entering your move details on our platform. You'll receive offers from multiple movers to compare.",
  },
  {
    question:
      "Are the other movers on your platform verified?",
    answer: "Yes, all movers on our platform undergo a verification process to ensure they meet our standards for professionalism, reliability, and safety.",
  },
  {
    question: "How does the pricing formula work?",
    answer: "Our pricing formula is calculated based on multiple factors, including the volume of your belongings, the distance of the move, and any additional services required. Each mover on our platform provides a detailed breakdown of their costs so you can compare offers transparently.",
  },
  { question: "What if i need to cancel or reschedule my move?",
     answer: "You can cancel or reschedule your move through your account dashboard up to 24 hours before the scheduled date. Cancellations or changes made within 24 hours may be subject to the mover’s cancellation policy, which is outlined in their offer details." },
  { question: "What payment methods do ANNGL accepts?",
     answer: "ANNGL accepts all major credit cards (Visa, Mastercard, American Express) and PayPal." },
];

export const MainFaqs = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-r from-green-20/50 via-golden-50/30 to-green-30/50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800">
      <div className="container">
        <Typography variant="h1" className="text-center !text-navy dark:text-gray-100">
          FAQ's
        </Typography>
        <Typography
          className="text-center mt-3 max-w-[980px] mx-auto !text-navy "
        >
          Frequently Asked Questions
        </Typography>

        <div className="mt-10">
          {data.map((faq, index) => (
            <FAQ key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = ({ faq }: { faq: { question: string; answer: string } }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="px-5 rounded-[6px] border border-primary-light-200 dark:border-gray-600 overflow-hidden mb-5 last:mb-0 bg-white dark:bg-gray-800/50">
      <div
        className="py-3 flex justify-between items-center gap-5 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        <Typography variant="bodyMediumBold" className="!text-navy">{faq.question}</Typography>
        {show ? (
          <FiMinus className="text-2xl text-black-900 dark:text-gray-300" />
        ) : (
          <GoPlus className="text-2xl text-black-900 dark:text-gray-300" />
        )}
      </div>

      <div
        className={`transition-all duration-300 ${show ? "pb-5 opacity-100 visible h-auto" : "opacity-0 invisible h-0"
          }`}
      >
        <Typography className=" !text-navy dark:text-gray-300">
          {faq.answer}
        </Typography>
      </div>
    </div>
  );
};
