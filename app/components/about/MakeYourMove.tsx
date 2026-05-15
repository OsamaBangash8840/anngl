import { IoIosArrowForward } from "react-icons/io";
import { Button, Typography } from "../common";

export const MakeYourMove = () => {
    return (
     <section style={{
        backgroundImage: "url(/images/moverBox.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(17, 42, 53, 0.8)",
        backgroundBlendMode: "multiply",
      }} className="w-full py-16">
            <div className="container flex flex-col items-center gap-4 my-9">
                <Typography variant="hDisplay" className="" >Ready To Make Your <span className="font-homemade-apple text-primary">Move?</span></Typography>
                <Button title="Reinforce the ease & benefits of using the platform" variant="white" className="md:!px-14 !py-3 md:!py-0 !bg-navy !text-white" icon={<IoIosArrowForward  color="white"/>}/>
            </div>
        </section>
    );
};