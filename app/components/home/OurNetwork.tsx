import Image from "next/image";
import { Typography } from "../common"
import { IoLocation } from "react-icons/io5";


export const OurNetwork = () => {
    return (
        <section style={{
        backgroundImage: "url(/images/ourNetwork.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full py-16 md:py-16 bg-primary relative">
            <div className="container flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                <div className="flex-[1.2]">
                    <Typography variant="h2" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-16 after:h-[1.7px] after:bg-black">Our Network</Typography>
                    <Typography variant="hDisplay" className=" mt-8 !leading-[55px]">Cover a large area to all Corners of the  world</Typography>
                </div>
                <div className="flex-1">
                    <Image
                        src="/images/globe.svg"
                        alt="World Map"
                        width={100}
                        height={100}
                        className="w-[600px] -mt-22"
                    />
                </div>
            </div>
            <div className="absolute left-[27%] bottom-8 flex justify-center items-center gap-1">
                <IoLocation className="text-[18px]" />
                <Typography variant="bodySmall">Malaysia</Typography>
            </div>
             <div className="absolute right-[45%] top-[21%] flex justify-center items-center gap-1">
                <IoLocation className="text-[18px]" />
                <Typography variant="bodySmall">Saudi Arabia</Typography>
            </div>
             <div className="absolute right-[7%] bottom-15 flex justify-center items-center gap-1">
                <IoLocation className="text-[18px]" />
                <Typography variant="bodySmall">United States</Typography>
            </div>
        </section>
    )
}
