import Image from "next/image";
import { Typography } from "../common"
import { FaStar } from "react-icons/fa";


export const ContactDetails = () => {
    return (
        <div className=" container flex flex-col md:flex-row justify-between items-center gap-16 2xl:24 my-8">
            <div className="flex gap-4 justify-center items-center">
                <Image src="/images/callIcon.svg" alt="call" width={50} height={50}/>
                <div>
            <Typography  className="!text-navy !font-medium"> Call Us</Typography>
            <Typography variant="h3" className="!text-navy !font-medium"> (123) 456 - 7890</Typography>
                </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <Image src="/images/emailIcon.svg" alt="email" width={58} height={51}/>
                <div>
            <Typography  className="!text-navy !font-medium"> Email Us </Typography>
            <Typography variant="h3" className="!text-navy !font-medium"> Support @anngl.com </Typography>
                </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <Image src="/images/locationIcon.svg" alt="building" width={44} height={48}/>
                <div>
            <Typography  className="!text-navy !font-medium"> Location</Typography>
            <Typography variant="h3" className="!text-navy !font-medium"> Riyadh, KSA</Typography>
                </div>
            </div>
    
        </div>
    )
} 