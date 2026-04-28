import { IoIosArrowForward } from "react-icons/io"
import { Button, Typography } from "../common"

export const ContactHero = () => {
    return (
        <section style={{
        backgroundImage: "url(/images/servicesHerobg.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full">
            <div className="container flex flex-col items-center justify-center my-32">
                <Typography variant="h3" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-[-8px] after:w-16 after:h-[2px] after:bg-black">Contact Us</Typography>
                <Typography variant="hDisplay" className="mt-4">Get in Touch With ANNGL</Typography>
                <Typography className="text-center mt-3 max-w-[900px]">Have questions or need assistance? Our team is here to help!</Typography>
                <Button title="Get Price & Compare Movers" variant="white" className="!px-14 mt-6" icon={<IoIosArrowForward  color="navy"/>}/>
            </div>
        </section>
    )
}