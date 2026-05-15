import Image from "next/image"
import { Typography } from "../common"
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { routes } from "@/app/base/utils/constants";


export const Footer = () => {
    return (
    <div className="">
    {/* Globe Sec */}
<div className="w-full md:h-[375px] h-[200px] bg-primary relative  flex items-center" dir="ltr">
  
  {/* Left decoration */}
  <Image
    src="/images/globeLeft.svg"
    alt="line"
    width={235}
    height={122}
    className="absolute left-[7%]  md:left-[11%] 2xl:left-[22%] md:top-[64%] top-[48%] -translate-y-1/2 z-0 w-[80px] h-[50px]  md:w-[235px] md:h-[122px]"
  />

  {/* Right decoration */}
  <Image
    src="/images/globeRight.svg"
    alt="line"
    width={235}
    height={122}
    className="absolute right-[2%] md:right-[26%] 2xl:right-[27%] md:top-[53%] top-[43%] w-[80px] h-[50px] md:w-[235px] md:h-[122px] -translate-y-1/2 z-11"
  />

  {/* Text */}
  <div className="relative z-20 ml-[20%] md:ml-[28%] 2xl:ml-[36%] max-w-[275px]  md:max-w-[620px]">
    <Typography variant="hDisplay" className="leading-tight !text-[25px] md:!text-[40px] -mt-12 md:mt-0  text-white text-center md:text-start ">
      Cover a Large Area to All Corners of the <span className="font-homemade-apple !text-primary">world</span>
    </Typography>
  </div>

  {/* Globe */}
  <Image
    src="/images/globe.gif"
    alt="World Map"
    width={500}
    height={500}
    className="absolute right-[0%] md:right-[18%] 2xl:right-[25%] top-1/2 -translate-y-1/2 h-[450px] -mt-10 w-auto object-contain z-10"
  />
</div>
        <footer className="bg-navy py-10">
            <div className="container flex flex-col md:flex-row justify-between md:items-center gap-12 mb-12">
                <div className=" pt-12">
                    <Link href={routes.home} className="" >

                    <Image
                        src="/images/footerLogo.svg"
                        alt="Footer"
                        width={160}
                        height={100}
                    />
                    </Link>
                    <Typography variant="bodyMedium" className="mt-5 !text-[14px] max-w-[371px]">Connect with trusted moving companies to make your move hassle-free. Enjoy peace of mind with verified professionals handling your belongings.</Typography>
                    <div className="flex justify-start  gap-8 mt-6">
                        <div className=""><FaFacebookF color="white" size={26} /></div>
                        <div className=""><BsTwitter color="white" size={26} /></div>
                        <div className=""><BsInstagram color="white" size={26} /></div>
                    </div>
                </div>
                <div className="">
                    <Typography variant="bodyLarge">
                        Learn More
                    </Typography>
                    <div className="flex flex-col gap-4 mt-4">
                        <Link href={routes.aboutUs} className="" >
                        <Typography >About ANNGL</Typography>
                        </Link>
                        <Typography>Commercial Registration</Typography>
                        <Typography>Privacy Policy</Typography>
                    </div>
                </div>   
                <div className="">
                    <Typography variant="bodyLarge">
                        We Can Help You
                    </Typography>
                    <div className="flex flex-col gap-4 mt-4">
                        <Link href={routes.services} className="" >
                        <Typography >Our Services</Typography>
                        </Link>
                    
                        <Typography>Carriers</Typography>
                        <Link href={routes.workWithUs} className="" >
                        <Typography>Work With us</Typography>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <Typography as="div" className="flex justify-start md:justify-center items-center gap-2">We Have <Typography variant="h2" className="!text-primary">A</Typography></Typography>
                    <Typography as="div" className="flex justify-start md:justify-center items-center gap-2">For All Your <Typography variant="h2" className="!text-primary">Q</Typography></Typography>
                </div>

            </div>
            <div className="container border-t border-[#F4F7F7]">
                <Typography variant="bodySmall" className="pt-5">© 2026 All Right Reserved | ANNGL </Typography>
            </div>
        </footer>
        </div>
    )
}