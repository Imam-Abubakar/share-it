import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

function TopHeader({ setToggleBar }) {
  return (
    <div
      className="flex p-5 border-b 
    items-center justify-between
    md:justify-end"
    >
      <AlignJustify className="md:hidden" onClick={() => setToggleBar(true)} />
      <p className="text-blue-50 text-[22px] font-black md:invisible">
        Share <span className="text-primary">It</span>!
      </p>
      <UserButton />
    </div>
  );
}

export default TopHeader;
