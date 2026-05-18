import { IoIosArrowForward } from "react-icons/io"
import { Hero, Typography } from "../common"
import { useTranslations } from "next-intl"

export const ContactHero = () => {
    const t = useTranslations("common.contact.hero");
    return (
        <>
          <section
              className={`w-full bg-primary`}
            >
              <div className="container flex flex-col items-center justify-center my-32">
            
                <Typography variant="hDisplay" className="mt-4 text-center md:text-left">
                {t("title")}
                </Typography>
                <Typography className="text-center mt-3 max-w-[900px]">
                  {t("description")}
                </Typography>
              </div>
            </section>
                    </>
    )
}