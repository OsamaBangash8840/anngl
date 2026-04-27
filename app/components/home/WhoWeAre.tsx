import Image from "next/image"
import { Button, Typography } from "../common"

export const WhoWeAre = () => {
    return (
        <div>
            <div className=" flex justify-center bg-primary items-center gap-20">
                    <Image
                        src="/images/whoWeAre.svg"
                        alt="Who We Are"
                        width={500}
                        height={500}
                        className="w-full h-auto flex-1"
                    />
                <div className="flex-1 mt-8">
                    <Typography variant="h2" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-16 after:h-[1.5px] after:bg-black">Who We Are</Typography>
                    <Typography variant="hDisplay" className="max-w-[420px] mt-8">We Are <span className="font-homemade-apple text-black">Leader</span> in Moving Company</Typography>
                    <Typography variant="bodyMedium" className="mt-5 max-w-[503px]">We're a Saudi team dedicated to making every move across the Kingdom simpler, faster, and more affordable. ANNGL connects you with a wide range of trusted, certified moving companies so you always get the best service at the best price.</Typography>
                    <Button
                        title="About Us"
                        variant="white"
                        className="mt-8 !bg-navy !text-white"
                    />
                </div>
                
            </div>
        </div>
    )
}