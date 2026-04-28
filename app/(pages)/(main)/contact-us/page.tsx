import { MakeYourMove } from "@/app/components/about"
import { MainFaqs } from "@/app/components/common"
import { ContactHero, ContactDetails, Form } from "@/app/components/contact"
import { OurNetwork, Testimonials } from "@/app/components/home"

export default function ContactUs() {
    return (
        <>
            <ContactHero />
            <ContactDetails />
            <Form />
            <MakeYourMove />
            <MainFaqs/>
            <Testimonials />
            <OurNetwork />
        </>
    )
}