import { IoIosArrowForward } from "react-icons/io"
import { Hero } from "../common"

export const ContactHero = () => {
    return (
        <Hero 
            title="Contact Us"
            heading="Get in Touch With ANNGL"
            description="Have questions or need assistance? Our team is here to help!"
            buttonTitle="Get Price & Compare Movers"
            buttonIcon={<IoIosArrowForward color="navy"/>}
        />
    )
}