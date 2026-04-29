"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "../common";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Ahmed Mohammed",
        role: "Studio (400-600 sq ft) Moved in NY",
        text: "The best moving experience I've ever had. Fast, reliable, and very professional. The team was extremely helpful throughout the entire process.",
        avatar: "/images/testimonial1.svg",
    },
    {
        id: 2,
        name: "Sara Al-Fahad",
        role: "Studio (400-600 sq ft) Moved in NY",
        text: "Moving was so stressful until I found ANNGL. They connected me with a top-tier moving company that handled everything perfectly.",
        avatar: "/images/testimonial2.svg",
    },
    {
        id: 3,
        name: "John Doe",
        role: "Studio (400-600 sq ft) Moved in NY",
        text: "Highly recommend! Affordable prices and high quality service. I will definitely use ANNGL again for my next move.",
        avatar: "/images/testimonial3.svg",
    },
    {
        id: 4,
        name: "Khalid Ibrahim",
        role: "Studio (400-600 sq ft) Moved in NY",
        text: "Very professional service. The app is easy to use and the moving companies are certified and trusted.",
        avatar: "/images/testimonial1.svg",
    }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="px-2 md:px-4 outline-none">
        <div className="border w-full border-primary/20 bg-white relative rounded-2xl p-5 md:p-6 mt-16 md:mt-12 shadow-[0px_3px_7.5px_2px_rgba(0,0,0,0.10)] mb-10">
            <div className="flex -mt-20 md:-mt-18 relative z-20">
                <div className="rounded-full mx-auto p-1 bg-white">
                    <Image
                        src={item.avatar}
                        alt={item.name}
                        width={90}
                        height={90}
                        className="relative z-20 rounded-full md:w-[110px] md:h-[110px]"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
                <Typography variant="h3" className="!text-black !text-[18px] md:text-[20px] font-bold">
                    {item.name}
                </Typography>
                <Typography className="!text-gray-500 !text-[13px] md:text-[14px] mt-1">
                    {item.role}
                </Typography>
                <div className="flex items-center justify-center gap-1 mb-3 mt-5 md:mt-6">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#FFB900] text-base md:text-lg" />
                    ))}
                </div>
            </div>
            <Typography
                variant="bodyMedium"
                className="!text-gray-600 italic mt-4 mb-4 leading-relaxed text-center text-[13px] md:text-[16px]"
            >
                "{item.text}"
            </Typography>
        </div>
    </div>
);

export const Testimonials = () => {
    const desktopSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        dotsClass: "slick-dots custom-dots",
    };

    const mobileSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: "20px",
        dotsClass: "slick-dots custom-dots",
    };

    return (
        <section className="py-12 md:py-24 bg-[#F7F7F7] overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 md:mb-16">
                    <Typography variant="h1" className="!text-black relative inline-block text-[22px] md:text-[32px] leading-tight">
                        Words from the <span className="font-homemade-apple text-primary">Clients</span> we've moved
                    </Typography>
                    <Typography className="text-navy mt-2 text-sm md:text-base">
                        Reinforce the ease & benefits of using the platform
                    </Typography>
                </div>

                <Image
                    src="/images/blockQuotes.svg"
                    alt="testimonialBg"
                    width={48}
                    height={30}
                    className="absolute top-[10%] right-[5%] 2xl:right-[15%] hidden md:block"
                />

                {/* Desktop View */}
                <div className="hidden md:block testimonial-slider-container pt-10">
                    <Slider {...desktopSettings}>
                        {testimonials.map((item) => (
                            <TestimonialCard key={item.id} item={item} />
                        ))}
                    </Slider>
                </div>

                {/* Mobile View */}
                <div className="md:hidden testimonial-slider-container pt-16">
                    <Slider {...mobileSettings}>
                        {testimonials.map((item) => (
                            <TestimonialCard key={item.id} item={item} />
                        ))}
                    </Slider>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .testimonial-slider-container .slick-dots {
                    position: relative !important;
                    bottom: -20px !important;
                    display: flex !important;
                    justify-content: center !important;
                    list-style: none !important;
                    padding: 0 !important;
                    margin-top: 20px !important;
                }
                .testimonial-slider-container .slick-dots li {
                    margin: 0 6px !important;
                }
                .testimonial-slider-container .slick-dots li button {
                    font-size: 0 !important;
                    line-height: 0 !important;
                    display: block !important;
                    width: 10px !important;
                    height: 10px !important;
                    padding: 5px !important;
                    cursor: pointer !important;
                    color: transparent !important;
                    border: 0 !important;
                    outline: none !important;
                    background: transparent !important;
                }
                .testimonial-slider-container .slick-dots li button:before {
                    font-family: 'slick' !important;
                    font-size: 10px !important;
                    line-height: 20px !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 20px !important;
                    height: 20px !important;
                    content: '•' !important;
                    text-align: center !important;
                    opacity: .25 !important;
                    color: #ADAEB1 !important;
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                }
                .testimonial-slider-container .slick-dots li.slick-active button:before {
                    opacity: 1 !important;
                    color: #DA6635 !important;
                }
                .testimonial-slider-container .slick-list {
                    padding-bottom: 20px !important;
                    overflow: visible !important;
                }
                .testimonial-slider-container .slick-track {
                    display: flex !important;
                    align-items: stretch !important;
                }
            ` }} />
        </section>
    );
};