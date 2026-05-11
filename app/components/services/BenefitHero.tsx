import Image from "next/image"
import { Typography } from "../common"

export const BenefitHero = () => {
    return (
        <>
        <section
        className=" bg-[#63818D] ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-52 pt-10 ">
                <Typography variant="hDisplay" className="text-white !text-[40px] w-[286.5px]">How to benefit from our services in</Typography>
                <Typography variant="bodyMedium" className="w-[320px] ">At Move, we offer you an innovative platform that makes the transfer process easier and faster than all your previous experiences. Whether you are on your way to a new location or work for a moving company and are looking to expand your business, our services are tailored to meet your needs and achieve the best results.</Typography>
            </div>

            <div className="flex justify-between items-center pb-10 " dir="ltr">
                           <div className="flex mt-3 relative ml-[3%] md:ml-[9.5%] 2xl:ml-[10%]">
                            <Typography variant="h3" className=" !text-[40px] !font-homemade-apple !text-primary ml-[80%] 2xl:ml-[100%] ">anngl</Typography>
                            <Image
                               src="/images/anngllineBenefit.svg"
                               alt="About Us"
                               width={249}
                               height={100}
                               className="w-full max-w-[249px] -ml-4"
                               />
                           </div>
                            <Image
                               src="/images/annglline.svg"
                               alt="About Us"
                               width={249}
                               height={100}
                               className="w-full max-w-[249px] mr-[16%] 2xl:mr-[30%] mt-3"
                               />
                        </div>
            </section>
        </>
    )
}