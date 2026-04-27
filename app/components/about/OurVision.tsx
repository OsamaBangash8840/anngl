import Image from "next/image";
import { Typography } from "../common";

export const OurVision = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
                <div className="flex flex-col justify-center items-start py-20 pl-[10%] pr-10 md:pr-24 bg-navy" >
                    <div className="max-w-[600px]">
                        <Image
                            src="/images/ourVision.svg"
                            alt="Our Vision"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <Typography className=" mt-4 text-white"  variant="h2">Our Vision</Typography>
                        <Typography className=" mt-4 text-white leading-relaxed">We are a Saudi team that aims to make the moving experience easier for all residents of Saudi Arabia by providing fast and convenient moving services. ANNGL is a platform that offers a variety of moving services by presenting a list of the best trusted and certified moving companies, ensuring you receive the highest level of quality at the best prices.</Typography>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start py-20 pr-[10%] pl-10 md:pl-24 bg-teal " >
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