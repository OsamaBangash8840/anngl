import { OurVision, Rating, WhoWeAre } from "@/app/components/about"
import { OurNetwork, Testimonials } from "@/app/components/home"

export default function AboutUs() {
    return (
        <>
            <WhoWeAre />
            <OurVision />
            <Rating />
            <Testimonials />
            <OurNetwork />
        </>
    )
}