"use client";

import { useState, useEffect, useRef } from "react";
import { Button, Typography } from "../common";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Otp = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(55);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Focus next input
        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        console.log("Verifying OTP:", otp.join(""));
        router.push("/");
    };

    return (
        <div className="flex items-center justify-center gap-8 2xl:gap-20 min-h-screen">

                <div className="max-w-[550px] w-full px-6">
                    <Typography variant="h2" className="!text-navy mt-2 font-bold">Verify OTP</Typography>
                    <Typography className="!text-navy mt-3 ">
                        We sent a verification code to your number +966 508143372
                    </Typography>
                    
                    <div className="flex gap-4 sm:gap-16 mt-10 justify-between">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-full h-14 sm:h-16 border border-[#E5E7EB] rounded-[6px] text-center text-xl font-medium outline-none focus:border-primary transition-all text-navy placeholder:text-gray-300"
                                placeholder="3"
                            />
                        ))}
                    </div>

                    <div className="flex justify-end mt-4">
                        <Typography variant="bodySmall" className="!text-navy ">
                            {timer}s
                        </Typography>
                    </div>

                    <Button 
                        onClick={handleVerify} 
                        title="Verify" 
                        variant="primary" 
                        className="!w-full !text-[16px] mt-10 !h-[50px] !bg-primary !font-semibold" 
                    />
                    
                    <Typography className="!text-navy mt-16 text-center">
                        Didn’t receive? <span className={` cursor-pointer !text-primary`} onClick={() => timer === 0 && setTimer(55)}>Resend</span>
                    </Typography>
                </div>
        </div>
    );
};
