import { IoIosArrowForward } from "react-icons/io"
import { Hero, Typography } from "../common"

export const ContactHero = () => {
    return (
        <>
          <section
              className={`w-full bg-primary`}
            >
              <div className="container flex flex-col items-center justify-center my-32">
            
                <Typography variant="hDisplay" className="mt-4 text-center md:text-left">
                 Contact Us
                </Typography>
                <Typography className="text-center mt-3 max-w-[900px]">
                  ave questions or need assistance? Our team is here to help!
                </Typography>
              </div>
            </section>
                    </>
    )
}