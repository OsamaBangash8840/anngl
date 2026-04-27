import { AfterWhoWeAre, BeforeFooter, Clients, FourGrids, Hero, OurNetwork, Testimonials, WhoWeAre } from "../components/home";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhoWeAre />
      <AfterWhoWeAre />
      <FourGrids />
      <OurNetwork />
      <Testimonials />
      <BeforeFooter />
      <Clients />
    </div>
  );
}

