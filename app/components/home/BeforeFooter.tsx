import Image from "next/image";
import { Button, Typography } from "../common";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";

export const BeforeFooter = () => {
     const t = useTranslations('common.home');
    return (
     <div style={{
           backgroundImage: "url(/images/ready-sec.gif)",
           backgroundPosition: "center",
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
         }} className="w-full h-[400px]">
          <div className="flex items-center justify-center">
           <Typography variant="hDisplay" className="flex items-center justify-center pt-[120px] text-center relative inline-block after:content-[''] after:absolute after:-bottom-0 after:left-[0px] after:w-16 after:h-[2px] after:bg-primary" >{t('readyMove')}</Typography>
          </div>
          <div className="flex items-center justify-center mt-3">
           <Typography variant="h3" className="text-center">{t('easeBenefits')}</Typography>
          </div>
            <Button
                      title={t('getPrice')}
                      variant="white"
                      className="!px-14 mt-6 mx-auto !bg-teal !text-white"
                      icon={<IoIosArrowForward  color="white"/>}
                    />
     </div>
    );
};