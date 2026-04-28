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
        avatar: "/images/testimonial1.svg", // Using logo as placeholder
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

export const Testimonials = () => {
    const settings = {
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
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        dotsClass: "slick-dots custom-dots",
    };

    return (
        <section className="py-24 bg-[#F7F7F7] overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Typography variant="h1" className="!text-black relative inline-block ">
                        Words from the <span className="font-homemade-apple text-primary">Clients</span> we’ve moved
                    </Typography>
                    <Typography className="text-navy">Reinforce the ease & benefits of using the platform</Typography>
                </div>
                <Image src="/images/blockQuotes.svg" alt="testimonialBg" width={48} height={30} className="absolute top-[20%] right-[5%] 2xl:right-[15%] " />
                <div className="testimonial-slider-container">
                    <Slider {...settings}>
                        {testimonials.map((item) => (
                            <div key={item.id} className="px-4 outline-none">
                                
                                <div className="border w-full border-primary/20 bg-white relative rounded-2xl p-6 mt-12 shadow-[0px_3px_7.5px_2px_rgba(0,0,0,0.10)]">
                                    <div className="flex -mt-18 relative z-20">
                                        <div className="rounded-full mx-auto p-1">
                                            <Image src={item.avatar} alt={item.name} width={110} height={110} className="relative z-20 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <Typography variant="h3" className="!text-black !text-[20px] font-bold">
                                            {item.name}
                                        </Typography>
                                        <Typography className="!text-gray-500 !text-[14px] mt-1">
                                            {item.role}
                                        </Typography>
                                         <div className="flex items-center justify-center gap-1 mb-3 mt-6">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-[#FFB900] text-lg" />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <Typography variant="bodyMedium" className="!text-gray-600 italic mt-4 mb-4 leading-relaxed text-center text-lg">
                                        "{item.text}"
                                    </Typography>
                                    
                                 
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx global>{`
                .testimonial-slider-container .slick-dots {
                    position: relative;
                    bottom: -50px;
                }
                .testimonial-slider-container .slick-dots li {
                    margin: 0 4px;
                }
                .testimonial-slider-container .slick-dots li button:before {
                    color: #ffff;
                    font-size: 12px;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .testimonial-slider-container .slick-dots li.slick-active button:before {
                    color: #DA6635;
                    opacity: 1;
                    font-size: 12px;
                }
                .testimonial-slider-container .slick-list {
                    padding-bottom: 20px;
                }
            `}</style>
        </section>
    );
};