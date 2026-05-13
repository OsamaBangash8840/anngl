"use client";
import { useState } from "react";
import { Button, Modal, Typography } from "../common";
import { AfterContinueModal } from "./AfterContinueModal";

interface IChooseInventoryModal {
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (type: "inventory" | "video") => void;
}

export const ContinueModal = ({ isOpen, onClose, onSelect }: IChooseInventoryModal) => {
  const [showAfter, setShowAfter] = useState(false);

  const handleContinue = () => {
    onClose();
    setShowAfter(true);
  };

  const handleAfterClose = () => {
    setShowAfter(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title=""
        className="!max-w-[660px] !rounded-[6px]"
        paddingClass="p-8"
      >
        <div className="flex flex-col items-center text-center">
          <Typography variant="bodyLarge" className="!text-navy !text-[18px]">
            Continue to location
          </Typography>
          <Typography className="!text-navy mt-4">
            Do you want to add additional cartons{" "}
            <span className="text-primary">Yes</span> or{" "}
            <span className="text-primary">No</span> thanks
          </Typography>
          <Button
            title="Continue"
            className="mt-5 w-full"
            onClick={handleContinue}
            variant="default"
          />
        </div>
      </Modal>

      {/* Rendered as sibling, outside the first Modal */}
      <AfterContinueModal isOpen={showAfter} onClose={handleAfterClose} />
    </>
  );
};