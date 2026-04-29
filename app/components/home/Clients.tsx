"use client";

import { Typography } from "../common";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientList = [
    "A+ Business",
    "Global Moving LLC.",
    "American Moving Assoc.",
    "California BestMover",
    "MovTop"
];

export const Clients = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="my-8">
            {/* Desktop View: Static Flex */}
            <div className="hidden md:flex container justify-center items-center gap-10 lg:gap-16 2xl:gap-24">
                {clientList.map((client, index) => (
                    <Typography key={index} variant="h3" className="!text-teal whitespace-nowrap">
                        {client}
                    </Typography>
                ))}
            </div>

            {/* Mobile View: Slider */}
            <div className="md:hidden px-6">
                <Slider {...settings}>
                    {clientList.map((client, index) => (
                        <div key={index} className="outline-none text-center">
                            <Typography variant="h3" className="!text-teal">
                                {client}
                            </Typography>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};