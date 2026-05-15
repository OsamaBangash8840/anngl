import Image from "next/image"
import { Button, Hero as CommonHero, Typography } from "../common"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";

export const Hero = () => {
    return (
        <>
        <section
         style={{
          backgroundImage: "url(/images/servicesHero.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" ">
            <div className=" py-16">
                <Typography variant="hDisplay" className=" relative -ml-[7%] text-center z-90 w-full !font-semibold">Every Transition <br/> Journey Needs</Typography>
               <div className="flex justify-between items-center " dir="ltr">
                <div className="flex mt-3 relative">
                 <Typography variant="h3" className=" !text-[20px] md:!text-[40px] !font-homemade-apple ml-[30%] md:ml-[70%] 2xl:ml-[100%] ">anngl</Typography>
                 <Image
                    src="/images/anngllineWhite.svg"
                    alt="About Us"
                    width={249}
                    height={100}
                    className="w-full max-w-[100px] md:max-w-[249px] -ml-4"
                    />
                </div>
                 <Image
                    src="/images/anngllineWhite.svg"
                    alt="About Us"
                    width={612}
                    height={100}
                    className="w-full max-w-[100px] md:max-w-[249px] mr-[16%] 2xl:mr-[30%] mt-3"
                    />
             </div>
                  <div dir="ltr" className="">
                    <Button
                      title="Get Price & Compare Movers"
                      variant="white"
                      className="!px-5 md:!px-22  mt-6 ml-[10%] md:ml-[15%] z-90 !bg-[#ADAEB1] !border-primary !border !font-regular !text-primary"
                      icon={<FaArrowRightLong  className="text-primary"/>}
                      />
                  </div>
            </div>

        </section>
         </>
    )
}