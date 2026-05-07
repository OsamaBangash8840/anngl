import { AfterWhoWeAre, BeforeFooter, Clients, FourGrids, Hero, Testimonials, WhoWeAre } from "@/app/components/home";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhoWeAre />
      <AfterWhoWeAre />
      <FourGrids />
      <BeforeFooter />
      <Testimonials />
      <Clients />
    </div>
  );
}

