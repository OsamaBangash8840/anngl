import Image from "next/image"
import { Button, CountryCodeSelectField, TextField, Typography } from "../common"
import Link from "next/link"

export const RegisterComponent = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center  gap-8 2xl:gap-20 min-h-screen">
            <div style={{
                backgroundImage: "url('/images/loginBg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative flex-1 md:min-h-[600px] min-h-[400px] "
            >
             <Image src="/images/bgCenterOverlay.svg" alt="loginBg" width={187} height={68} className="absolute bottom-[50%] left-[14%] -translate-x-1/2 translate-y-1/2" />   
             <Image src="/images/bgDownOverlay.svg" alt="loginBg" width={284} height={68} className="absolute bottom-0 -right-[14%] z-10" />   
            </div>
            <div className="flex-1 flex flex-col gap-y-1 justify-center relative mx-4 md:mx-0 ">
                <Image src="/images/cross.svg" alt="loginBg" width={14} height={14} className="absolute top-10 right-8 cursor-pointer" />
                <div className="max-w-[600px]">
                <Typography variant="h2" className="!text-navy mt-2">Create an Account</Typography>
                <Typography className="!text-navy mt-3">Create account & become part of movers</Typography>
                <TextField  placeholder="First Name" className="mt-4" icon={<Image src={'/images/profileIcon.svg'} alt="Profile Icon" width={24} height={24}/>}/>
                <TextField type="number"  placeholder="Phone Number" className="mt-4" icon={<Image src={'/images/phoneIcon.svg'} alt="Profile Icon" width={24} height={24}/>}/>
                <div className="flex items-center gap-2 mt-4"><Image src={'/images/agreeIcon.svg'} alt="Profile Icon" width={20} height={20}/>
                <Typography className="!text-navy mt-5">By creating account you’re agreeing to our <span className="!font-bold !text-navy ">Terms of services</span> and <span className="!font-bold !text-navy ">Privacy policy</span></Typography>
                </div>
                <Button title="Register" variant="white" className=" !font-normal !w-full !text-[16px] mt-6 !bg-primary !text-white" />
                 <Typography className="!text-navy mt-5 text-center">Already have an account? <span className="!text-primary "><Link href="/login">Login</Link></span></Typography>

                </div>
            </div>
        </div>
    )
}
