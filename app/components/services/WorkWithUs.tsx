import { FaArrowRightLong } from "react-icons/fa6"
import { Button, Typography } from "../common"

export const WorkWithUsBenefits = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <div className=" bg-navy  py-32  ">
                <Typography className="text-center">Would you like to work with us as a carrier</Typography>
                <Button
                    title="Get Price & Compare Movers"
                    variant="white"
                    className="!px-8  mt-6 mx-auto z-90 !bg-transparent !border-primary !border !font-regular !text-primary"
                    icon={<FaArrowRightLong  className="text-primary"/>}
                    /> 
            </div>
            <div className="bg-[#ADAEB1] py-32 ">
                     <Typography className="text-center !text-navy">Looking for a reliable moving service</Typography>
                <Button
                    title="Get Price & Compare Movers"
                    variant="white"
                    className="!px-8  mt-6 mx-auto z-90 !bg-transparent !border-navy !border !font-regular !text-navy"
                    icon={<FaArrowRightLong  className="text-navy"/>}
                    />
            </div>
        </section>
    )
}