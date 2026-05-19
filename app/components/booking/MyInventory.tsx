'use client';
import { Button, Tabs, TextField, Typography, SelectField, DateField } from "../common";
import { IoChevronForward } from "react-icons/io5";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { CollapsibleCard } from "../common/CollapsibleCard";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, Fragment } from "react";
import { CustomModal } from "./CustomModal";
import { Dialog, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { AdditionalCarton } from "./AdditionalCarton";


const listItemsKeys =[
    "sofa",
    "table",
    "bed",
    "drawers",
    "wardrobes",
    "appliances",
    "additionalCarton",
]

const categoryListKeys = [
    { key: "bedroomItems", label: "Bedroom Items" },
    { key: "bedroom", label: "Bed Room" },
    { key: "diningRoom", label: "Dining Room" },
    { key: "storageRoom", label: "Storage Room" },
    { key: "additionalCarton", label: "Additional Carton" }
]

const SidebarContent = ({ onSelect, t }: { onSelect: (category: string) => void, t: any }) => (
    <div className="space-y-4">
        {categoryListKeys.map((cat, idx) => (
            <CollapsibleCard 
                key={idx} 
                onClick={() => onSelect(cat.label)} 
                defaultOpen={idx === 0} 
                title={t(`categoryList.${cat.key}`)} 
                count={idx === 0 ? 7 : 0} 
                icon={<Image src={'/images/bookingIcon.svg'} alt="" width={24} height={24}/>}
            >
                {listItemsKeys.map((itemKey, index) => (
                    <li key={index} className="py-1 px-3 list-none">
                        <Typography className="!text-navy">{t(`roomItems.${itemKey}`)}</Typography>
                    </li>
                ))}
            </CollapsibleCard>
        ))}
    </div>
);


const InventoryItem = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex  justify-between items-center p-5  rounded-sm bg-[#E2E9EB] border border-[#C8D5D9] shadow-sm hover:shadow-md transition-shadow">
      <div>
      <Typography variant="bodyMedium" className="!text-navy !font-bold !text-[#112A35] ">{title}</Typography>
      <Typography variant="bodySmall" className="!text-[#112A35] mt-2 ">Size 2’ x 2’</Typography>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Image src="/images/inventoryIcon.svg" alt={title} width={50} height={50} className="mt-5" />
         <div className="flex items-center gap-4 px-3 py-1">
        <button onClick={decrement} className=" rounded-full w-6 h-6 flex items-center justify-center text-gray border border-gray font-bold text-lg hover:text-navy transition-colors">-</button>
        <Typography variant="bodyMediumBold" className="!text-navy">{count}</Typography>
        <button onClick={increment} className=" bg-[#112A35] rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-lg hover:text-navy transition-colors">+</button>
      </div>
      </div>
    </div>
  );
};

const AddCustomItem = ({ onAdd, t }: { onAdd: () => void, t: any }) => {
    return (
        <div onClick={onAdd} className="bg-primary-light-100 border border-primary-light-200 rounded-sm p-5 flex flex-col  justify-center h-full cursor-pointer  transition-all">
            <Typography variant="bodyMedium" className="!text-[#112A35] font-medium ">{t('cannotFind')}</Typography>
            <Typography variant="h3" className="!text-primary mt-2">{t('addItem')}</Typography>
        </div>
    )
}

const TabContent = ({ onAdd, t }: { onAdd: () => void, t: any }) => (
  <div className="mt-6">
    <div className="grid md:grid-cols-4 grid-cols-2 gap-8 mb-8">
      <SelectField placeholder={t('selects.chooseOne')} />
      <SelectField placeholder={t('selects.chooseOne')} />
      <SelectField placeholder={t('selects.chooseOne')} />
      <SelectField placeholder={t('selects.chooseOne')} />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {listItemsKeys.slice(0, 5).map((itemKey, index) => (
        <InventoryItem key={index} title={t(`roomItems.${itemKey}`)} />
      ))}
      <AddCustomItem onAdd={onAdd} t={t} />
    </div>
  </div>
);

export const MyInventory = () => {
  const t = useTranslations("common.booking.inventory");
  const tCommon = useTranslations("common.booking");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Bedroom Items");
  
  return (
        <>
        <div className=" flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
                <Typography variant="h3" className="!text-navy">{t('title')}</Typography>
                <Typography className="!text-navy max-w-[550px]">{t('subtitle')}</Typography>
            </div>
            <Button title={tCommon('continue')} variant="default" className="!rounded-[6px] mt-5 md:mt-0 " icon={<IoChevronForward className="text-white" />}/>
        </div>

        <div className="flex items-center gap-4 mt-8">
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 bg-[#112A35] text-white rounded-sm"
            >
                <HiMenu size={24} />
            </button>
            <TextField variant="search" placeholder={t('searchPlaceholder')} className="flex-1 py-2" icon={<CiSearch />} />
        </div>

        {/* Mobile Sidebar (Left Drawer) */}
        <Transition show={isSidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[9999] md:hidden" onClose={() => setIsSidebarOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-8">
                                <Typography variant="h3" className="!text-navy">{t('categories')}</Typography>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-2 text-navy"
                                >
                                    <HiX size={24} />
                                </button>
                            </div>
                            <SidebarContent t={t} onSelect={(category) => {
                                setSelectedCategory(category);
                                setIsSidebarOpen(false);
                            }} />
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>

        <div className="flex items-start gap-6">
            {/* Desktop Sidebar */}
            <div className="hidden md:block mt-8 w-1/4">
                <SidebarContent t={t} onSelect={setSelectedCategory} />
            </div>

            <div className="mt-8 w-full md:w-3/4">
                {selectedCategory === "Additional Carton" ? (
                    <AdditionalCarton />
                ) : (
                    <>
                        <Typography variant="bodyLarge" className="!bg-[#112A35] text-center !px-2 !py-3 !rounded-sm">{t('roomsHeader')}</Typography>
                        <Tabs
                            variant="underline"
                            className="mt-6"
                            items={[
                                {
                                    title: t('livingRooms.room1'),
                                    content: <TabContent t={t} onAdd={() => setIsModalOpen(true)} />
                                },
                                {
                                    title: t('livingRooms.room2'),
                                    content: <TabContent t={t} onAdd={() => setIsModalOpen(true)} />
                                },
                                {
                                    title: t('livingRooms.room3'),
                                    content: <TabContent t={t} onAdd={() => setIsModalOpen(true)} />
                                },
                                {
                                    title: t('livingRooms.room4'),
                                    content: <TabContent t={t} onAdd={() => setIsModalOpen(true)} />
                                }
                            ]}
                        />
                    </>
                )}
            </div>
        </div>
 <CustomModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
        </>
    )
}