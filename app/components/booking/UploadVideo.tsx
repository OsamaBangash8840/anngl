'use client';
import { IoChevronForward, IoClose } from "react-icons/io5";
import { Button, Tabs, TextField, Typography } from "../common";
import { CiSearch } from "react-icons/ci";
import { useState, useRef } from "react";
import { ContinueModal } from "./ContinueModal";
import { FaUpload, FaPlay } from "react-icons/fa";

const TabContent = ({ onAdd }: { onAdd: () => void }) => {
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedVideo(url);
    }
  };

  const handleRemove = () => {
    setUploadedVideo(null);
    // Reset input so the same file can be re-selected
    if (inputRef.current) inputRef.current.value = "";
  };

  // ── After upload: video player view ──────────────────────────────────────
if (uploadedVideo) {
  return (
    <div className="mt-6 relative w-[766px] h-[390px] mx-auto rounded-[8px] bg-black">
      {/* Close / remove button */}
      <button
        onClick={handleRemove}
        className="absolute top-[-10px] right-[-10px] z-[99] w-9 h-9 rounded-full bg-[#112A35] flex items-center justify-center hover:bg-opacity-80 transition-colors cursor-pointer"
      >
        <IoClose className="text-white text-[18px]" />
      </button>

      {/* Inner wrapper handles overflow clipping */}
      <div className="w-full h-full rounded-[8px] overflow-hidden">
        <video
          src={uploadedVideo}
          controls
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

  // ── Before upload: file upload view ──────────────────────────────────────
  return (
    <div className="mt-6">
      <div className="relative mt-8 w-[60%] mx-auto border-dashed bg-white border border-gray flex flex-col items-center justify-center rounded-[6px] py-24 cursor-pointer group">
        <FaUpload className="text-[#9CA3AF] text-[33px] mb-3 group-hover:scale-110 transition-transform" />
        <Typography variant="bodySmall" className="!text-[#6B7280]">
          Click to upload a video
        </Typography>
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export const UploadVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h3" className="!text-navy">Upload video</Typography>
          <Typography className="!text-navy max-w-[550px]">
            Manage your inventory and we are the only service that gives you a guaranteed price based on the size of your inventory.
          </Typography>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          title="Continue"
          variant="default"
          className="!rounded-[6px]"
          icon={<IoChevronForward className="text-white" />}
        />
      </div>

      <TextField
        variant="search"
        placeholder="Search for an items"
        className="mt-8"
        icon={<CiSearch />}
      />

      <div className="mt-8">
        <Typography variant="bodyLarge" className="!bg-[#112A35] text-center !px-2 !py-3 !rounded-sm">
          My Living Room Items
        </Typography>
        <Tabs
          variant="underline"
          className="mt-6"
          items={[
            { title: "Living Room 1", content: <TabContent onAdd={() => setIsModalOpen(true)} /> },
            { title: "Living Room 2", content: <TabContent onAdd={() => setIsModalOpen(true)} /> },
            { title: "Living Room 3", content: <TabContent onAdd={() => setIsModalOpen(true)} /> },
            { title: "Living Room 4", content: <TabContent onAdd={() => setIsModalOpen(true)} /> },
          ]}
        />
      </div>

      <ContinueModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};