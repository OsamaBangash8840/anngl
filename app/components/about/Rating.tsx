import { Typography } from "../common"
import { FaStar } from "react-icons/fa";


export const Rating = () => {
    return (
        <div className=" container flex  flex-col md:flex-row justify-between items-center gap-16 2xl:24 my-8">
            <div className="flex flex-col justify-center items-center">
            <Typography variant="h3" className="!text-navy"> 100 <span className="!text-primary">+</span></Typography>
            <Typography variant="h3" className="!text-navy !font-medium"> 
Certified companies</Typography>
            </div>
             <div className="flex flex-col justify-center items-center">
            <Typography variant="h3" className="!text-navy"> KSA <span className="!text-primary">.</span></Typography>
            <Typography variant="h3" className="!text-navy !font-medium"> Nationwide coverage</Typography>
            </div>
            <div className="flex flex-col justify-center items-center">
            <Typography variant="h3" className="!text-navy flex items-center gap-2"> 5 <span className="!text-primary"><FaStar /></span></Typography>
            <Typography variant="h3" className="!text-navy !font-medium"> Top rated</Typography>
            </div>
        </div>
    )
} 