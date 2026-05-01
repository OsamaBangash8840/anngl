import { ReactNode } from "react";
import { Typography } from "../Typography";
import { Button } from "../Button";

interface HeroProps {
  title: string;
  heading: string;
  description: string;
  buttonTitle?: string;
  buttonIcon?: ReactNode;
  bgImage?: string;
  className?: string;
}

export const Hero = ({
  title,
  heading,
  description,
  buttonTitle,
  buttonIcon,
  bgImage = "/images/servicesHerobg.svg",
  className = "",
}: HeroProps) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`w-full ${className}`}
    >
      <div className="container flex flex-col items-center justify-center my-32">
        <Typography
          variant="h3"
          className="relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-[-8px] after:w-16 after:h-[2px] after:bg-black"
        >
          {title}
        </Typography>
        <Typography variant="hDisplay" className="mt-4 text-center md:text-left">
          {heading}
        </Typography>
        <Typography className="text-center mt-3 max-w-[900px]">
          {description}
        </Typography>
        {buttonTitle && (
          <Button
            title={buttonTitle}
            variant="white"
            className="!px-14 mt-6"
            icon={buttonIcon}
          />
        )}
      </div>
    </section>
  );
};
