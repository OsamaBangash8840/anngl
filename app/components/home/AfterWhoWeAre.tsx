import Image from "next/image"
import { Typography } from "../common"

export const AfterWhoWeAre = () => {
    return (
        <div style={{
        backgroundImage: "url(/images/AfterWhoWeAre.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full h-[500px]">
       <div className="flex items-center justify-center">
        <Typography variant="hDisplay" className="flex items-center justify-center text-center !text-[25px] md:!text-[48px] pt-[220px]" >Why Choose <Image src="/images/logoPrimary.svg" alt="logo" width={173} height={56} /> ?</Typography>
       </div>
       <div className="flex items-center justify-center mt-3">
        <Typography variant="bodySmall">We’ll make this whole moving thing easy for you!</Typography>
       </div>
        </div>
    )
}