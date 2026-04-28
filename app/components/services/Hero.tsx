import { Typography } from "../common"

export const Hero = () => {
    return (
        <section style={{
        backgroundImage: "url(/images/servicesHerobg.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full">
            <div className="container flex flex-col items-center justify-center my-32">
                <Typography variant="h3" className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-[-8px] after:w-16 after:h-[2px] after:bg-black">Our Services</Typography>
                <Typography variant="hDisplay" className="mt-4">Welcome To ANNGL, Your moving supply store</Typography>
                <Typography className="text-center mt-3 max-w-[900px]">ANNGL is your one-stop shop for all your moving needs. Whether you're moving locally or long distance, need storage services, or require assistance with packing and unpacking, we've got you covered. Click here to explore our wide range of moving supplies and get ready for a hassle-free moving experience.</Typography>
            </div>
        </section>
    )
}