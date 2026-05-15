"use client";
import Image from "next/image";
import { Button, Typography } from "../common";
import { IoChevronForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { useState } from "react";
import { CompaniesModal } from "./CompaniesModal";


interface ICompanyCard {
    image: string;
    title: string;
    rating: string;
    price: string;
    availablitiy: string;
    phoneNo: string;
    yearsInBusiness: string;
    employeesNo: string;
    buttonText: string;
    reviewsNo?:string;
    topBadge?:string;
    diamondIcon?:string;
    onPriceRequest?: () => void;
}

const dummyData: ICompanyCard[] =[
    {
        image: "/images/companiesImg1.svg",
        title: "Fast Local Movers",
        rating: "4.8",
        price: "$499",
        availablitiy: "Available Today",
        phoneNo: "555-555-5555",
        yearsInBusiness: "5 years",
        employeesNo: "10 employees",
        buttonText: "Request Price",
        reviewsNo: "12 reviews",
        topBadge: "Top Rated",
        diamondIcon: "/images/diamondIcon.svg",
    },
     {
        image: "/images/companiesImg2.svg",
        title: "Fast Local Movers",
        rating: "4.8",
        price: "$499",
        availablitiy: "Available Today",
        phoneNo: "555-555-5555",
        yearsInBusiness: "5 years",
        employeesNo: "10 employees",
        buttonText: "Request Price",
        reviewsNo: "12 reviews",
        // topBadge: "Top Rated",
        // diamondIcon: "/images/diamondIcon.svg",
    },
     {
        image: "/images/companiesImg3.svg",
        title: "Fast Local Movers",
        rating: "4.8",
        price: "$499",
        availablitiy: "Available Today",
        phoneNo: "555-555-5555",
        yearsInBusiness: "5 years",
        employeesNo: "10 employees",
        buttonText: "Request Price",
        reviewsNo: "12 reviews",
        // topBadge: "Top Rated",
        // diamondIcon: "/images/diamondIcon.svg",
    },
];

export const CompanyCard = ({image, title, rating, price, availablitiy, phoneNo, yearsInBusiness, employeesNo, buttonText, reviewsNo, topBadge, diamondIcon, onPriceRequest}: ICompanyCard) => {
    return (
        <>
        <div className=" flex flex-col md:flex-row md:justify-between items-center md:items-stretch gap-2 border border-primary-light-100 bg-white p-2 rounded-sm md:w-[75%] w-[100%] mx-auto">
            <div className=" flex flex-col md:flex-row  gap-4">

        
            <div className=" h-[213px] w-[205px]">
                <Image src={image} alt=" Icon" width={205} height={213}/>
            </div>
            <div className=" flex flex-col">
                <div className=" flex items-center gap-2">
                    <Typography variant="bodyLarge" className="!text-navy">{title}</Typography>
                    {diamondIcon && <div className=" flex items-center gap-1 !bg-primary-light-100 p-2 rounded-sm">
                    
                    <Image src={diamondIcon} alt=" Icon" width={20} height={20}/>
                    <Typography className=" !text-[#112A35] !text-[14px] rounded-sm ">{topBadge}</Typography>
                    </div>}
                </div>
                <div className=" flex items-center gap-1.5 mt-1">
                    <Typography className="!text-[#204A60] max-w-[550px]">{rating}</Typography>
                   {
                    Array.from({length: 5}).map((_,index)=>{
                        return(
                            <FaStar className="!text-yellow" color="#EAAF87"/>
                        )
                    })
                }
                    
                    <Typography className="!text-[#204A60]">{reviewsNo}</Typography>
                </div>
                <div className=" flex items-center gap-2 mt-1">
                    <CiClock2 className="text-[#204A60]"/>
                    <Typography className="!text-[#204A60]">{availablitiy}</Typography>
                </div>
                 <div className=" flex items-center gap-2 mt-1">
                    <FaPhone className="text-[#204A60]"/>
                    <Typography className="!text-[#204A60]">{phoneNo}</Typography>
                </div> 
                  <div className=" flex items-center gap-2 mt-1">
                    <MdOutlineDateRange className="text-[#204A60]"/>
                    <Typography className="!text-[#204A60]">{yearsInBusiness}</Typography>
                </div> 
                <div className=" flex items-center gap-2 mt-1">
                    <CiClock2 className="text-[#204A60]"/>
                    <Typography className="!text-[#204A60]">{employeesNo}</Typography>
                </div>
                <div className="flex flex-wrap w-[80%] gap-2 border border-primary-light-100 rounded-sm mt-2 px-3 py-1">
                    <Typography className="!text-[#204A60]">Included</Typography>
                    <Image src="/images/includedIcon1.svg" alt=" Icon" width={19} height={19}/>
                    <Image src="/images/includedIcon2.svg" alt=" Icon" width={19} height={19}/>
                    <Image src="/images/includedIcon3.svg" alt=" Icon" width={19} height={19}/>
                </div>
            </div>
                </div>
            <div className=" flex flex-col md:w-1/3">
            <Typography variant="h3" className="!text-[#204A60] !font-semibold mt-3 md:mt-0">{price} <span className="!text-black !font-normal !text-[14px] ">Approximate price</span></Typography>
            <Typography className="!text-[#204A60] flex gap-2 mt-6 md:mt-3 ">Services included <Image src="/images/exclmationIcon.svg" alt=" Icon" width={20} height={20}/></Typography>
            <Button onClick={onPriceRequest} title="Request Price" variant="default" className="!rounded-[6px] mt-3 md:mt-auto"/>
            </div>
        </div>
        </>
    );
};

export const Companies = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <> 
         <div className="  flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                            <Typography variant="h3" className="!text-navy">Movers list</Typography>
                            <div className=" flex items-center gap-1">
                                <Typography className="!text-navy max-w-[550px]">Verify your location info below. Prices are right around the corner!  </Typography>
                                <Image src="/images/exclmationIcon.svg" alt=" Icon" width={20} height={20}/>
                            </div>
                        </div>
                        <Button title="Continue" variant="default" className="!rounded-[6px] mt-5 md:mt-0" icon={<IoChevronForward className="text-white" />}/>
                    </div>
                    <div className=" flex flex-col gap-8 mt-8">
                    {
                        dummyData.map((item,index)=>{
                            return(
                                <CompanyCard key={index} {...item} onPriceRequest={() => setIsModalOpen(true)}/>
                            )
                        })
                    }
                    </div>
                    <CompaniesModal
                     isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
                    />
        </>
    );
};