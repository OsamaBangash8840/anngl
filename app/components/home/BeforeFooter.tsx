import Image from "next/image";
import { Button, Typography } from "../common";
import { IoIosArrowForward } from "react-icons/io";

export const BeforeFooter = () => {
    return (
    <section style={{
        backgroundImage: "url(/images/beforeFooterbg.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full py-12 mt-28 ">
            <div className="container flex items-center justify-between gap-12 ">
                <div className=" flex-1">
                    <Typography variant="hDisplay" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-16 after:h-[2px] after:bg-primary ">
                        Ready To Make Your Move?
                    </Typography>
                    <Typography variant="h2" className="mt-6" >Reinforce the ease & benefits of using the platform</Typography>
                     <Button
                                  title="Get Price & Compare Movers"
                                  variant="white"
                                  className="mt-16 !px-14"
                                  icon={<IoIosArrowForward  color="black"/>}
                                />
                </div>
                <div className="flex-1 -mt-68 z-10">
                <Image
                    src="/images/crates.svg"
                    alt="Before Footer"
                    width={600}
                    height={600}
                    className="w-[600px] scale-125"
                />
                </div>
            </div>
        </section>
    );
};