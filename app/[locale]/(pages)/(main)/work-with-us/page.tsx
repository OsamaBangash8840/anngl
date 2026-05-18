import { Hero } from "@/app/components/common";
import { JoinUsForm, WhyChooseUs } from "@/app/components/workWithUs";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";

export default function WorkWithUsPage() {
    const t = useTranslations("common.workWithUs");
    return (
        <>
         <Hero
                    title={t("hero.title")}
                    heading={t("hero.heading")}
                    description={t("hero.description")}
                    buttonTitle={t("hero.button")}
                    buttonIcon={<IoIosArrowForward color="navy"/>}
                />
                <WhyChooseUs />
                <JoinUsForm />
                
        </>
    );
}