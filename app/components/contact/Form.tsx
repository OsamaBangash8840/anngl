"use client";

import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Button, TextareaField, TextField, Typography } from "../common"
import Image from "next/image";

export const Form = () => {
    const [promoToggle, setPromoToggle] = useState(true);
    return (
        <section className="container flex  items-center gap-8 mt-12 mb-8">
            <div className="flex-1">
                <Typography variant="h2" className="!text-navy "> Our Team is here to help!</Typography>
                <form>
                    <div className="flex items-center gap-2 mt-4">
                        <TextField  placeholder="First Name" icon={<Image src={'/images/profileIcon.svg'} alt="Profile Icon" width={24} height={24}/>}/>
                        <TextField  placeholder="Last Name" icon={<Image src={'/images/profileIcon.svg'} alt="Profile Icon" width={24} height={24}/>}/>
                    </div>
                        <TextField  placeholder="Email" className="mt-2" icon={<Image src={'/images/mailIcon.svg'} alt="Message Icon" width={24} height={24}/>}/>
                      <TextareaField
                    placeholder="Your Message"
                    className="mt-2"
                    rows={3}
                />
                <label className="flex items-center gap-3 mt-3 cursor-pointer select-none">
                    <div
                        className={`relative w-[25px] h-[14px] rounded-full transition-colors duration-300 ${promoToggle ? 'bg-primary' : 'bg-gray-300'}`}
                        onClick={() => setPromoToggle(p => !p)}
                    >
                        <span
                            className={`absolute top-0.5 left-0.5 w-[10px] h-[10px] bg-white rounded-full shadow transition-transform duration-300 ${promoToggle ? 'translate-x-[11px]' : 'translate-x-0'}`}
                        />
                    </div>
                    <Typography variant="bodySmall" className="!text-navy ">Send me promotion messages!</Typography>
                </label>
                <Button title="Get Price & Compare Movers" variant="white" className=" !w-full !text-[16px] mt-6 !bg-primary !text-white" />
                
                </form>
            </div>  
            <div className="relative flex-1 min-h-[400px] rounded-[6px] overflow-hidden">
             <Image src="/images/form-bg.svg" alt="Contact" fill className="object-cover"/>
            </div>
                    </section>
    )
}