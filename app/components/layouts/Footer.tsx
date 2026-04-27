import Image from "next/image"
import { Typography } from "../common"
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";


export const Footer = () => {
    return (
        <footer className="bg-navy">
            <div className="container flex justify-between items-center gap-12 my-8">
                <div className="">
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
                    <div className="flex flex-col gap-2 mt-4">
                        <Typography >How it works</Typography>
                        <Typography>About Us</Typography>
                        <Typography>Contact Us</Typography>
                    </div>
                </div>   
                <div className="">
                    <Typography variant="bodyLarge">
                        Help and Solution
                    </Typography>
                    <div className="flex flex-col gap-2 mt-4">
                        <Typography >Talk to support</Typography>
                        <Typography>Support docs</Typography>
                        <Typography>System status</Typography>
                    </div>
                </div>
                <div className="">
                    <Typography className="flex justify-center items-center gap-2">We Have <Typography variant="h2" className="!text-primary">A</Typography></Typography>
                    <Typography className="flex justify-center items-center gap-2">For All Your <Typography variant="h2" className="!text-primary">Q</Typography></Typography>
                </div>

            </div>
        </footer>
    )
}