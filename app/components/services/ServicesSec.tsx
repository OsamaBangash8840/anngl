import Image from "next/image"
import { Typography } from "../common"

export const ServicesSec = () => {
    return (
        <section className="container my-10 grid grid-cols-2 gap-4">
                <div 
                style={{
                    backgroundImage: "url(/images/localSupplies.svg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className="relative rounded-[6px] h-[280px]"
                >
                    <div className=" absolute flex  items-center bottom-4 gap-4 left-8 ">
                        <Image
                        src="/images/servicesArrow.svg"
                        alt="Local Supplies"
                        width={12}
                        height={12}
                        className="w-[12px] h-[12px]"
                        />
                        <Typography variant="h2" className="!font-bold">Quality Local Moving Supplies</Typography>
                    </div>
                </div>
                <div 
                style={{
                    backgroundImage: "url(/images/movingSupplies.svg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className="relative rounded-[6px] h-[280px]"
                >
                    <div className=" absolute flex  items-center bottom-4 gap-4 left-8 ">
                        <Image
                        src="/images/servicesArrow.svg"
                        alt="Local Supplies"
                        width={12}
                        height={12}
                        className="w-[12px] h-[12px]"
                        />
                        <Typography variant="h2" className="!font-bold">Reliable Long Distance Moving Supplies</Typography>
                    </div>
                </div>  
                  <div 
                style={{
                    backgroundImage: "url(/images/secureSolutions.svg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className="relative rounded-[6px] h-[280px]"
                >
                    <div className=" absolute flex  items-center bottom-4 gap-4 left-8 ">
                        <Image
                        src="/images/servicesArrow.svg"
                        alt="Local Supplies"
                        width={12}
                        height={12}
                        className="w-[12px] h-[12px]"
                        />
                        <Typography variant="h2" className="!font-bold">Secure Storage Solutions</Typography>
                    </div>
                </div>
                <div 
                style={{
                    backgroundImage: "url(/images/packagingSolutions.svg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className="relative rounded-[6px] h-[280px]"
                >
                    <div className=" absolute flex  items-center bottom-4 gap-4 left-8 ">
                        <Image
                        src="/images/servicesArrow.svg"
                        alt="Local Supplies"
                        width={12}
                        height={12}
                        className="w-[12px] h-[12px]"
                        />
                        <Typography variant="h2" className="!font-bold">Efficient Packing & Unpacking Essentials</Typography>
                    </div>
                </div>
            
        </section>
    )
}