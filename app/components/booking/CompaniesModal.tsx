import Image from "next/image";
import { Button, Modal, Typography } from "../common";
import { FaPhone, FaStar } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

interface IChooseInventoryModal {
  isOpen: boolean;
  onClose: () => void;
}

interface RatingRow {
  rating: string;
  pct: number;
  count: number;
  barColor: string;
  starColor: string;
}

const rows: RatingRow[] = [
  { rating: "5.0", pct: 72, count: 31, barColor: "#F9E9DB", starColor: "#F9E9DB" },
  { rating: "5.0", pct: 34, count: 8,  barColor: "#DA6635", starColor: "#DA6635" },
  { rating: "5.0", pct: 9,  count: 3,  barColor: "#5D9EF4", starColor: "#5D9EF4" },
  { rating: "5.0", pct: 12, count: 5,  barColor: "#E18556", starColor: "#E18556" },
  { rating: "5.0", pct: 3,  count: 1,  barColor: "#E4626F", starColor: "#E4626F" },
];

export const CompaniesModal = ({ isOpen, onClose,  }: IChooseInventoryModal) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title=""
        className="!max-w-[1080px] !rounded-[6px]"
        paddingClass="p-8"
      >
        <div className="flex flex-col mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
             <div className="flex items-start gap-6">
                       <div className=" relative">
                           <Image src="/images/companiesImg1.svg" alt="Icon" width={205} height={130} className="rounded-lg h-[130px] w-[205px] -mt-8"/>
                       </div>
                       <div className="flex flex-col">
                           <div className="flex items-center gap-3">
                               <Typography variant="bodyLarge" className="!text-navy text-xl font-bold">Fast Local Movers</Typography>
                              <div className="flex items-center gap-1 !bg-primary-light-100 px-2 py-1 rounded-sm">
                               <Image src='/images/diamondIcon.svg' alt="Icon" width={16} height={16}/>
                               <Typography className="!text-[#112A35] !text-[12px] font-medium">Top Rated</Typography>
                               </div>
                           </div>
                           <div className="flex items-center gap-1.5 mt-2">
                               <Typography className="!text-[#204A60] font-semibold">4.8</Typography>
                              <div className="flex gap-0.5">
                                {Array.from({length: 5}).map((_,index)=>(
                                    <FaStar key={index} className="text-yellow-400 w-4 h-4" />
                                ))}
                              </div>
                               <Typography className="!text-[#204A60] text-sm">(255 Reviews)</Typography>
                           </div>
                       </div>
             </div>
            <div className="flex  flex-col  gap-2 -mt-5">
                  <div className="flex items-center gap-3">
                               <CiClock2 className="text-[#204A60] w-5 h-5"/>
                               <Typography className="!text-[#204A60]">Working days: Mon - Fri</Typography>
                           </div> 
                             <div className="flex items-center gap-3">
                               <CiClock2 className="text-[#204A60] w-5 h-5"/>
                               <Typography className="!text-[#204A60]">Working time: 09 am - 06 pm</Typography>
                           </div>
                            <div className="flex items-center gap-3">
                               <FaPhone className="text-[#204A60] w-4 h-4"/>
                               <Typography className="!text-[#204A60]">Call: +966 311 425 116</Typography>
                           </div> 
                             <div className="flex items-center gap-3">
                               <MdOutlineDateRange className="text-[#204A60] w-5 h-5"/>
                               <Typography className="!text-[#204A60]">5 Years in Business</Typography>
                           </div> 
                           <div className="flex items-center gap-3">
                               <CiClock2 className="text-[#204A60] w-5 h-5"/>
                               <Typography className="!text-[#204A60]">20 Employees</Typography>
                           </div>
            </div>

          </div>
          <Typography className="!text-navy my-6">Welcome to Direct Movers! If you are in need of professional moving labor, you have come to the right place. Our team has years of experience in the moving industry and we are dedicated to providing top-notch service to all of our clients. When you hire us, you can expect reliable and efficient service. We take pride in being punctual and getting the job done right the first time. Care for your belongings. We handle all of your items with the utmost care, ensuring that they are safely transported to your new home. Customized solutions. We understand that every move is different and we work with you to create a personalized plan that meets your needs and budget We are confident that you will be satisfied with our services and we look forward to helping you with your next move. Contact us today to get started!</Typography>
          <div className="flex flex-col md:flex-row justify-start md:justify-center items-center gap-6">
            <div className="w-full md:w-1/4">
            <Typography variant="bodyLarge" className="!text-navy">Service area</Typography>
            <Image src="/images/mapImage.svg" alt="Map" width={251} height={247}/>

            <ul className="mt-4">
              <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-navy flex-shrink-0" />
                  <Typography className="!text-navy">Jeddah</Typography>
              </li>
              <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-navy flex-shrink-0" />
                  <Typography className="!text-navy">Madinah</Typography>
              </li>
              <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-navy flex-shrink-0" />
                  <Typography className="!text-navy">Riyadh</Typography>
              </li>
              <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-navy flex-shrink-0" />
                  <Typography className="!text-navy">Dammam</Typography>
              </li>
                  <Typography className="!text-primary ">See all</Typography>
            </ul>
            <Typography variant="bodyLarge" className="!text-navy mt-4">Services & Handling</Typography>
            <div className="grid grid-cols-3 gap-4 mt-3">
                <Typography className="!rounded-lg !bg-primary-light-100 !text-primary flex items-center justify-center w-[84px] py-1 px-1">Storage</Typography>
                <Typography className="!rounded-lg !bg-primary-light-100 !text-primary flex items-center justify-center w-[84px] py-1 px-1">Crating</Typography>
                <Typography className="!rounded-lg !bg-primary-light-100 !text-primary flex items-center justify-center w-[84px] py-1 px-1">Packing</Typography>
                <Typography className="!rounded-lg !bg-primary-light-100 !text-primary flex items-center justify-center w-[84px] py-1 px-1">Unpacking</Typography>
                <Typography className="!rounded-lg !bg-primary-light-100 !text-primary flex items-center justify-center w-[84px] py-1 px-1">Piano</Typography>
            </div>
            <Typography variant="bodyLarge" className="!text-navy mt-4">Licensed Business</Typography>
            <div className="mt-3">
                <Typography className="!text-navy">License Number: 00237723</Typography>
                <Typography className="!text-navy">Issuing City: BIRMINGHAM</Typography>
            </div>
            </div>
            <div className="md:w-3/4">
             <div className="flex items-center gap-4 mt-2 justify-center gap-2">
                <Typography variant="h2" className="!text-navy font-semibold">4.8</Typography>
                    <div>
                        <div className="flex gap-2.5">
                                {Array.from({length: 5}).map((_,index)=>(
                                    <FaStar key={index} className="text-yellow-400 w-5 h-5" />
                                ))}
                        </div>
                        <Typography className="!text-[#204A60] mt-1">(47 verified reviews)</Typography>
                    </div>
             </div>
              <div className="flex flex-col gap-3">
    {rows.map((row, i) => (
      <div key={i} className="flex items-center gap-3">
        <span className="text-sm font-medium w-7">{row.rating}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill={row.starColor}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <div className="flex-1 h-2.5 bg-gray-100 rounded-[2px] overflow-hidden">
          <div
            className="h-full rounded-[2px] transition-all duration-500"
            style={{ width: `${row.pct}%`, background: row.barColor }}
          />
        </div>
        <span className="text-sm text-gray-400 w-9 text-right">{row.pct}%</span>
        <span className="text-sm text-gray-300 w-8 text-right">({row.count})</span>
      </div>
    ))}
              </div>

              <div className="py-3 border border-primary-light-100 rounded-sm px-2 mt-6">
                <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <Image src="/images/companiesReview.svg" alt="Person" width={60} height={60}/>
                    <div>
                    <Typography variant="bodyLarge" className="!text-navy">Sarah L</Typography>
                    <Typography variant="bodySmall" className="!text-navy">2024-06-28</Typography>
                    </div>
                </div>
                     <div className="flex gap-2.5">
                                {Array.from({length: 5}).map((_,index)=>(<FaStar key={index} className="text-yellow-400 w-5 h-5" />))}
                     </div>
                </div>
                <Typography className="!text-navy text-center mt-5">"The platform made finding and booking a mover so easy. The movers were professional and careful with my belongings. Highly recommend!"</Typography>
                <Typography variant="bodySmall" className="!text-navy text-center mt-5">Studio (400-600 sq ft) Moved in NY</Typography>
                <div>
                    
                </div>
              </div>
               <div className="py-3 border border-primary-light-100 rounded-sm px-2 mt-6">
                <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <Image src="/images/companiesReview.svg" alt="Person" width={60} height={60}/>
                    <div>
                    <Typography variant="bodyLarge" className="!text-navy">Sarah L</Typography>
                    <Typography variant="bodySmall" className="!text-navy">2024-06-28</Typography>
                    </div>
                </div>
                     <div className="flex gap-2.5">
                                {Array.from({length: 5}).map((_,index)=>(<FaStar key={index} className="text-yellow-400 w-5 h-5" />))}
                     </div>
                </div>
                <Typography className="!text-navy text-center mt-5">"The platform made finding and booking a mover so easy. The movers were professional and careful with my belongings. Highly recommend!"</Typography>
                <Typography variant="bodySmall" className="!text-navy text-center mt-5">Studio (400-600 sq ft) Moved in NY</Typography>
                <div>
                    
                </div>
              </div>
               <div className="py-3 border border-primary-light-100 rounded-sm px-2 mt-6">
                <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <Image src="/images/companiesReview.svg" alt="Person" width={60} height={60}/>
                    <div>
                    <Typography variant="bodyLarge" className="!text-navy">Sarah L</Typography>
                    <Typography variant="bodySmall" className="!text-navy">2024-06-28</Typography>
                    </div>
                </div>
                     <div className="flex gap-2.5">
                                {Array.from({length: 5}).map((_,index)=>(<FaStar key={index} className="text-yellow-400 w-5 h-5" />))}
                     </div>
                </div>
                <Typography className="!text-navy text-center mt-5">"The platform made finding and booking a mover so easy. The movers were professional and careful with my belongings. Highly recommend!"</Typography>
                <Typography variant="bodySmall" className="!text-navy text-center mt-5">Studio (400-600 sq ft) Moved in NY</Typography>
                <div>
                    
                </div>
              </div>

            </div>

          </div>
        </div>
      </Modal>

    </>
  );
};