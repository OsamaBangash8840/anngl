import Image from "next/image";
import { Typography } from "../common";

export const WhoWeAre = () => {
    return (
        <section className="w-full bg-primary grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[500px]">
                <div className="flex flex-col justify-center py-20 pl-[10%] pr-10 md:pr-20">
                    <div className="max-w-[600px]">
                        <Typography variant="h3" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-16 after:h-[1.5px] after:bg-black">Who We Are</Typography>
                        <Typography variant="hDisplay" className="mt-4 ">Moving made Simple, across Saudi Arabia</Typography>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end p-12 md:p-24" style={{
                    backgroundImage: "url(/images/aboutUsWoWeAre.svg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}>
                    <Image
                        src="/images/aboutUsWoWeAreIcon.svg"
                        alt="About Us"
                        width={80}
                        height={80}
                        className="w-20 h-20"
                    />
                    <Typography className="!text-navy text-right mt-4 ">We are a Saudi team that aims to make the moving experience easier for all residents of Saudi Arabia by providing fast and convenient moving services. ANNGL is a platform that offers a variety of moving services by presenting a list of the best trusted and certified moving companies, ensuring you receive the highest level of quality at the best prices.</Typography>
                    <Image
                        src="/images/annglline.svg"
                        alt="About Us"
                        width={612}
                        height={100}
                        className="w-full max-w-[612px] 2xl:max-w-[900px] mt-5"
                    />
                </div>
        </section>
    )
}