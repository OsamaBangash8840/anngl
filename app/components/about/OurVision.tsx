import Image from "next/image";
import { Typography } from "../common";

export const OurVision = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
                <div className="flex flex-col justify-center items-start py-16 pl-[10%] pr-10 md:pr-24 bg-navy" >
                    <div className="max-w-[600px]">
                        <Image
                            src="/images/ourVision.svg"
                            alt="Our Vision"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <Typography className=" mt-4 text-white"  variant="h2">Our Vision</Typography>
                        <Typography className=" mt-4 text-white leading-relaxed">To be the leading provider of moving services in the Kingdom of Saudi Arabia, delivering a comprehensive moving experience that combines quality, safety, and ease for ANNGL customers.</Typography>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start py-16 pr-[10%] pl-10 md:pl-24 bg-teal " >
                    <div className="max-w-[600px] flex flex-col items-start">
                        <Image
                            src="/images/ourVisionIcon.svg"
                            alt="Our Mission"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <Typography className=" mt-4 text-white"  variant="h2">Our Mission</Typography>
                        <Typography className=" mt-4 text-white ">To provide a smooth, reliable service with a high level of transparency. ANNGL is always with you during your move and ensures that your belongings are in safe and trustworthy hands.</Typography>
                    </div>
                </div>
        </section>
    )
}