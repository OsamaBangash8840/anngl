import { Button, Typography } from "@/app/components/common";
import { IoChevronForward } from "react-icons/io5";

export default function UploadVideoPage() {
    return (
        <div>
              <div className=" flex justify-between items-center">
                        <div>
                            <Typography variant="h3" className="!text-navy">Manage inventory</Typography>
                            <Typography className="!text-navy max-w-[550px]">Manage your inventory and we are the only service that gives you a guaranteed price based on the size of your inventory.</Typography>
                        </div>
                        <Button title="Continue" variant="default" className="!rounded-[6px]" icon={<IoChevronForward className="text-white" />}/>
                    </div>
        </div>
    )
}