
import { Button, TextareaField, TextField, Typography } from "../common"
import Image from "next/image";

export const Form = () => {
    return (
        <>
        <Image src={'/images/contactAnnglLine.svg'} alt="background" width={900} height={34} className="mx-auto"/>
        <section className="container flex flex-col items-center gap-8 md:gap-12 mt-12 mb-16">
            <div className=" w-full md:w-[60%] mx-auto">
                <Typography variant="h2" className="!text-navy text-center"> Our team is here to serve you!</Typography>
                <form className="mt-6">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <TextField variant="contact" label="First Name *" labelVariant="bold" className="w-full" icon={<Image src={'/images/profileIcon.svg'} alt="Profile Icon" width={24} height={24}/>}/>
                        <TextField variant="contact" label="Last Name *" labelVariant="bold" className="w-full" icon={<Image src={'/images/profileIcon.svg'} alt="Profile Icon" width={24} height={24}/>}/>
                    </div>
                    <TextField  label="Email" labelVariant="bold" variant="contact" className="mt-3" icon={<Image src={'/images/mailIcon.svg'} alt="Message Icon" width={24} height={24}/>}/>
                    <TextareaField
                        variant="contact"
                        label="Your Message *"
                        labelVariant="bold"
                        placeholder="Your Message"
                        className="mt-3"
                        rows={4}
                    />
                    {/* <label className="flex items-center gap-3 mt-4 cursor-pointer select-none">
                        <div
                            className={`relative w-[28px] h-[16px] rounded-full transition-colors duration-300 ${promoToggle ? 'bg-primary' : 'bg-gray-300'}`}
                            onClick={() => setPromoToggle(p => !p)}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-[12px] h-[12px] bg-white rounded-full shadow transition-transform duration-300 ${promoToggle ? 'translate-x-[12px]' : 'translate-x-0'}`}
                            />
                        </div>
                        <Typography variant="bodySmall" className="!text-navy ">Send me promotion messages!</Typography>
                    </label> */}
                    <Button title="Submit" variant="white" className=" !w-full !text-[16px] mt-8 !bg-navy !text-white !h-14" />
                </form>
            </div>  

        </section>
            <div className="w-full md:w-[60%] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-32 md:my-16 my-8 justify-center">
                  <div className="flex flex-col gap-4  items-center">
                                <Image src="/images/callIcon.svg" alt="call" width={50} height={50}/>
                                <div>
                            <Typography  className="!text-navy !font-regular text-center "> Call Us</Typography>
                            <Typography variant="h3" className="!text-navy !font-medium mt-3"> (123) 456 - 7890</Typography>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 justify-center items-center">
                                <Image src="/images/emailIcon.svg" alt="email" width={58} height={51}/>
                                <div>
                            <Typography  className="!text-navy !font-regular text-center "> Email Us </Typography>
                            <Typography variant="h3" className="!text-navy !font-medium mt-3"> Support @anngl.com </Typography>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 justify-center items-center">
                                <Image src="/images/locationIcon.svg" alt="building" width={44} height={48}/>
                                <div>
                            <Typography  className="!text-navy !font-regular text-center "> Location</Typography>
                            <Typography variant="h3" className="!text-navy !font-medium mt-3"> Riyadh, KSA</Typography>
                                </div>
                            </div>
            </div>
        </>
    )
}