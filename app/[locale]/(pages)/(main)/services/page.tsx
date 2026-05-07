import { MakeYourMove } from "@/app/components/about";
import { MainFaqs } from "@/app/components/common";
import { OurNetwork, Testimonials } from "@/app/components/home";
import { Hero, ServicesSec } from "@/app/components/services";

export default function ServicesPage() {
    return (
        <>
        <Hero/>
        <ServicesSec/>
        <MakeYourMove />
        <MainFaqs/>
        <Testimonials />
        <OurNetwork />
        </>
    )
}