import Image from "next/image"
import { Typography } from "../common"
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";


export const Footer = () => {
    return (
    <div className="">
    {/* Globe Sec */}
<div className="w-full h-[375px] bg-primary relative  flex items-center">
  
  {/* Left decoration */}
  <Image
    src="/images/globeLeft.svg"
    alt="line"
    width={235}
    height={122}
    className="absolute left-[10%] 2xl:left-[20%] top-[64%] -translate-y-1/2 z-0"
  />

  {/* Right decoration */}
  <Image
    src="/images/globeRight.svg"
    alt="line"
    width={235}
    height={122}
    className="absolute right-[20.5%] 2xl:right-[27%] top-[53%] -translate-y-1/2 z-11"
  />

  {/* Text */}
  <div className="relative z-20 ml-[27%] 2xl:ml-[33%] max-w-[520px]">
    <Typography variant="hDisplay" className="leading-tight text-white ">
      Cover a Large Area to All Corners of the <span className="font-homemade-apple !text-primary">world</span>
    </Typography>
  </div>

  {/* Globe */}
  <Image
    src="/images/globe.gif"
    alt="World Map"
    width={500}
    height={500}
    className="absolute right-[18%] 2xl:right-[25%] top-1/2 -translate-y-1/2 h-[450px] -mt-10 w-auto object-contain z-10"
  />
</div>
        <footer className="bg-navy">
            <div className="container flex flex-col md:flex-row justify-between md:items-center gap-12 mb-12">
                <div className=" pt-12">
                    <Image
                        src="/images/footerLogo.svg"
                        alt="Footer"
                        width={160}
                        height={100}
                    />
                    <Typography variant="bodyMedium" className="mt-5 max-w-[454px]">Connect with trusted moving companies to make your move hassle-free. Enjoy peace of mind with verified professionals handling your belongings.</Typography>
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
                    <div className="flex flex-col gap-2.5 mt-4">
                        <Typography >Help centre</Typography>
                        <Typography>About Us</Typography>
                        <Typography>Contact Us</Typography>
                    </div>
                </div>   
                <div className="">
                    <Typography variant="bodyLarge">
                        Help and Solution
                    </Typography>
                    <div className="flex flex-col gap-2.5 mt-4">
                        <Typography >Talk to support</Typography>
                        <Typography>Support docs</Typography>
                        <Typography>System status</Typography>
                    </div>
                </div>
                <div className="">
                    <Typography as="div" className="flex justify-start md:justify-center items-center gap-2">We Have <Typography variant="h2" className="!text-primary">A</Typography></Typography>
                    <Typography as="div" className="flex justify-start md:justify-center items-center gap-2">For All Your <Typography variant="h2" className="!text-primary">Q</Typography></Typography>
                </div>

            </div>
            <div className="container -mt-3">
                <Typography variant="bodySmall">2026 by ANNGL. </Typography>
            </div>
        </footer>
        </div>
    )
}