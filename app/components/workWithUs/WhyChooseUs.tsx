import Image from "next/image"
import { Typography } from "../common"

export const WhyChooseUs = () => {
    return (
        <section className=" grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] mt-20 pb-5 ">
            <div className="p-8 lg:p-28" 
                style={{
                    backgroundImage: "url(/images/whyChooseUs.svg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Typography variant="h2" className="text-center">How do you provide your services with us at ANNGL?</Typography>
            </div>
            <div className="bg-white  ">
                <Image src={'/images/whyChooseUsIcon1.svg'} alt="" width={40} height={40} className="mx-auto mb-4 mt-16" />
                <Typography className="!text-navy text-center md:px-8 px-1 mt-6">Join us to showcase your services on the kingdom’s largest transportation platforms & reach thousands of customers.</Typography>
            </div>
            <div className="bg-[#204A60]  ">
                <Image src={'/images/whyChooseUsIcon2.svg'} alt="" width={40} height={40} className="mx-auto mb-4 mt-16" />
                <Typography className=" text-center md:px-8 px-1 mt-6">We give you the trust of customers as a certified partner of Transport that supports your reputation in the market.</Typography>
            </div>
            <div className="bg-[#ADAEB1]">
                <Image src={'/images/whyChooseUsIcon3.svg'} alt="" width={40} height={40} className="mx-auto mb-4 mt-16" />
                <Typography className="text-center md:px-8 px-1 mt-6">You can track and manage your orders efficiently and seamlessly through the smart system on the Move platform.</Typography>
            </div>
        </section>
    );
};