import { IoIosArrowForward } from "react-icons/io";
import { Button, Typography } from "../common";

export const MakeYourMove = () => {
    return (
     <section style={{
        backgroundImage: "url(/images/AfterWhoWeAre.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full py-12">
            <div className="container flex flex-col items-center gap-4 my-9">
                <Typography variant="hDisplay" className="" >Ready To Make Your <span className="font-homemade-apple text-primary">Move?</span></Typography>
                <Typography variant="h2">Reinforce the ease & benefits of using the platform</Typography>
                <Button title="Get Price & Compare Movers" variant="white" className="!px-14" icon={<IoIosArrowForward  color="navy"/>}/>
            </div>
        </section>
    );
};