import { IoIosArrowForward } from "react-icons/io";
import { Button, Typography } from "../common";
import { useTranslations } from "next-intl";

export const MakeYourMove = () => {
     const t = useTranslations('common.about');
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
                <Typography variant="hDisplay" className="" >{t('makeYourMove.title')} <span className="font-homemade-apple text-primary">{t('makeYourMove.titleAccent')}</span></Typography>
                <Button title={t('makeYourMove.button')} variant="white" className="md:!px-14 !py-3 md:!py-0 !bg-navy !text-white" icon={<IoIosArrowForward  color="white"/>}/>
            </div>
        </section>
    );
};