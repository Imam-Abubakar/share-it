"use client";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SideNav({ closeSideBar }) {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.location.pathname == "/upload") {
      setActiveIndex(0);
    } else {
      setActiveIndex(1);
    }
  }, []);

  return (
    <div className="shadow-sm border-r bg-black h-full">
      <div className="p-5 border-b">
        <Link href={process.env.NEXT_PUBLIC_DOMAIN}>
          <p className="text-blue-50 text-[22px] font-black">
            Share <span className="text-primary">It</span>!
          </p>
        </Link>
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <button
              key={index}
              className={`flex gap-2 p-4 px-6
                hover:bg-gray-100 w-full
                hover:text-blue-800
                
                ${
                  activeIndex == index
                    ? "bg-gray-100 w-full text-blue-800"
                    : "text-white"
                }`}
              onClick={() => {
                setActiveIndex(index);
                closeSideBar();
              }}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
