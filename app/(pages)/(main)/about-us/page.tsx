import { MakeYourMove, OurVision, Rating, WhoWeAre } from "@/app/components/about"
import { MainFaqs } from "@/app/components/common"
import { OurNetwork, Testimonials } from "@/app/components/home"

export default function AboutUs() {
    return (
        <>
            <WhoWeAre />
            <OurVision />
            <Rating />
            <MakeYourMove />
            <MainFaqs/>
            <Testimonials />
            <OurNetwork />
        </>
    )
}