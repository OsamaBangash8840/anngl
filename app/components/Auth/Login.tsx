"use client";

import Image from "next/image"
import { Button, CountryCodeSelectField, Typography } from "../common"
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Login = () => {
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("SA");
    const router = useRouter();

    const handleLogin = () => {
        console.log("Login triggered with phone:", phone);
        router.push('/verify-otp');
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    }

    return (
        <div className="flex justify-center gap-8 2xl:gap-20 min-h-screen">
            <div style={{
                backgroundImage: "url('/images/loginBg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative flex-1 min-h-[600px] "
            >
             <Image src="/images/bgCenterOverlay.svg" alt="loginBg" width={187} height={68} className="absolute bottom-[50%] left-[14%] -translate-x-1/2 translate-y-1/2" />   
             <Image src="/images/bgDownOverlay.svg" alt="loginBg" width={284} height={68} className="absolute bottom-0 -right-[14%] z-10" />   
            </div>
            <div className="flex-1 flex flex-col gap-y-1 justify-center relative ">
                <Image 
                    src="/images/cross.svg" 
                    alt="loginBg" 
                    width={14} 
                    height={14} 
                    className="absolute top-10 right-8 cursor-pointer" 
                    onClick={() => router.push('/')}
                />
                <div className="max-w-[600px]">
                    <Typography variant="h2" className="!text-navy mt-2">Welcome Back!</Typography>
                    <Typography className="!text-navy mt-3">Enter your phone number to login</Typography>
                    
                    <div className="flex items-center mt-5 w-full border border-primary-light-100 rounded-[6px] bg-white overflow-hidden focus-within:border-primary">
                        <div className="w-[120px]">
                            <CountryCodeSelectField 
                                value={countryCode}
                                onChange={(_, iso) => setCountryCode(iso)}
                                noBorder
                            />
                        </div>
                        <div className="w-[1px] h-6 bg-gray-200"></div>
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 px-4 py-3 outline-none text-sm text-gray-900 placeholder:text-gray"
                        />
                    </div>
                    <Button onClick={handleLogin} title="Login" variant="white" className=" !font-normal !w-full !text-[16px] mt-6 !bg-primary !text-white" />
                    

                    <Typography className="!text-navy mt-8 text-center">
                        Didn’t have an account? <span className="!text-primary font-medium"><Link href="/register">Register here</Link></span>
                    </Typography>
                </div>
            </div>
        </div>
    )
}

