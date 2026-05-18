import { FaArrowRightLong } from "react-icons/fa6"
import { Button, Typography } from "../common"
import { useTranslations } from "next-intl"

export const WorkWithUsBenefits = () => {
    const t = useTranslations("common.serviceBenefit.workWithUs");
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <div className=" bg-navy  py-32  ">
                <Typography className="text-center">{t("carrierTitle")}</Typography>
                <Button
                    title={t("carrierButton")}
                    variant="white"
                    className="!px-8  mt-6 mx-auto z-90 !bg-transparent !rounded-[12px] !border-primary !border !font-regular !text-primary"
                    icon={<FaArrowRightLong  className="text-primary"/>}
                    /> 
            </div>
            <div className="bg-[#ADAEB1] py-32 ">
                     <Typography className="text-center !text-navy">{t("clientTitle")}</Typography>
                <Button
                    title={t("clientButton")}
                    variant="white"
                    className="!px-8  mt-6 mx-auto z-90 !bg-transparent !rounded-[12px] !border-navy !border !font-regular !text-navy"
                    icon={<FaArrowRightLong  className="text-navy"/>}
                    />
            </div>
        </section>
    )
}