import { Hero } from "@/app/components/common";
import { OurNetwork } from "@/app/components/home";
import { JoinUsForm, WhyChooseUs } from "@/app/components/workWithUs";
import { IoIosArrowForward } from "react-icons/io";

export default function WorkWithUsPage() {
    return (
        <>
         <Hero
                    title="Work With Us"
                    heading="Enter Your Move Details"
                    description="Begin by providing your move specifics, including the type of move, locations, and date. This information helps us match you with the best moving companies."
                    buttonTitle="Get Price & Compare Movers"
                    buttonIcon={<IoIosArrowForward color="navy"/>}
                />
                <WhyChooseUs />
                <JoinUsForm />
                <OurNetwork/>
                
        </>
    );
}