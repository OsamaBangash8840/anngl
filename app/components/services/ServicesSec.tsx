import { ServiceCard, Typography } from "../common"
export const ServicesSec = () => {
    return (
        <>
        <section className="grid md:grid-cols-5"
        style={{
        backgroundImage: "url(/images/ourServicesBg.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
        >
                <ServiceCard 
                  icon="/images/transportationIcon.svg"
                  title="International Transportation"
                  description="Move your belongings from the Kingdom to Malaysia, the UAE, or any country within the Kingdom, with the most suitable carrier for your needs"
                  backgroundColor="#ADAEB1/70"
                />  
                  <ServiceCard 
                  icon="/images/boxIcon.svg"
                  title="Local Transportation"
                  description="Move your belongings within your city or from one city to another within the Kingdom with ease, while choosing the most suitable carrier through Move"
                  backgroundColor="#DA6635/70"
                  textColor="white"
                />   
                 <ServiceCard 
                  icon="/images/transportationIcon.svg"
                  title="Car Transport"
                  description="Move your car between cities within the Kingdom at the best prices with movers specialized in Annql."
                  backgroundColor="#FFFFFF/70"
                />  
                  <ServiceCard 
                  icon="/images/carmeraIcon.svg"
                  title="Device Transmission"
                  description="Move your electronic and electrical appliances with confidence with competent carriers and technicians through Mov"
                  backgroundColor="#204A60/70"
                   textColor="white"
                />  
                  <ServiceCard 
                  icon="/images/furnitureIcon.svg"
                  title="Moving Furniture"
                  description="Enjoy a safe and seamless moving experience of moving your furniture to your new location with Move authorized movers"
                  backgroundColor="#112A35/70"
                   textColor="white"
                />
  
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 my-16">
            <div className="bg-[#ADAEB1] w-[300px] ">
                <Typography variant="bodyLarge" className="!text-navy text-center px-8 pt-9">Fast, Organized & Secure services</Typography>
                <Typography variant="bodySmall" className="!text-navy text-center px-8  my-5">ANNGL is committed to providing flexibility and speed through a smart and integrated system that moves your belongings via fast-delivery moving companies</Typography>
            </div>
            <div className="bg-[#ADAEB1] w-[300px] ">
                <Typography variant="bodyLarge" className="!text-navy text-center px-8 pt-9">Services Wide</Typography>
                <Typography variant="bodySmall" className="!text-navy text-center px-8  my-5">ANNGL provides comprehensive services in cooperation with reliable moving companies that ensure you an easy, comfortable and safe transportation of your belongings</Typography>
            </div>
        </section>
            </>
    )
}