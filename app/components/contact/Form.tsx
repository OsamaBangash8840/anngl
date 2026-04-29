"use client";

import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Button, TextareaField, TextField, Typography } from "../common"
import Image from "next/image";

export const Form = () => {
    const [promoToggle, setPromoToggle] = useState(true);
    return (
        <section className="container flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-12 mb-16">
            <div className="w-full md:flex-1 order-2 md:order-1">
                <Typography variant="h2" className="!text-navy text-center md:text-left"> Our Team is here to help!</Typography>
                <form className="mt-6">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <TextField  placeholder="First Name" className="w-full" icon={<Image src={'/images/profileIcon.svg'} alt="Profile Icon" width={24} height={24}/>}/>
                        <TextField  placeholder="Last Name" className="w-full" icon={<Image src={'/images/profileIcon.svg'} alt="Profile Icon" width={24} height={24}/>}/>
                    </div>
                    <TextField  placeholder="Email" className="mt-3" icon={<Image src={'/images/mailIcon.svg'} alt="Message Icon" width={24} height={24}/>}/>
                    <TextareaField
                        placeholder="Your Message"
                        className="mt-3"
                        rows={4}
                    />
                    <label className="flex items-center gap-3 mt-4 cursor-pointer select-none">
                        <div
                            className={`relative w-[28px] h-[16px] rounded-full transition-colors duration-300 ${promoToggle ? 'bg-primary' : 'bg-gray-300'}`}
                            onClick={() => setPromoToggle(p => !p)}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-[12px] h-[12px] bg-white rounded-full shadow transition-transform duration-300 ${promoToggle ? 'translate-x-[12px]' : 'translate-x-0'}`}
                            />
                        </div>
                        <Typography variant="bodySmall" className="!text-navy ">Send me promotion messages!</Typography>
                    </label>
                    <Button title="Get Price & Compare Movers" variant="white" className=" !w-full !text-[16px] mt-8 !bg-primary !text-white !h-14" />
                </form>
            </div>  
            <div className="relative w-full md:flex-1 min-h-[300px] sm:min-h-[400px] rounded-[12px] overflow-hidden order-1 md:order-2">
                <Image src="/images/form-bg.svg" alt="Contact" fill className="object-cover"/>
            </div>
        </section>
    )
}