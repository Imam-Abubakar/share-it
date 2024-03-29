"use client";
import React, { useEffect, useState } from "react";
import { app } from "../../../firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import FileItemC from "./_components/FileItemC";
import Link from "next/link";
import Image from "next/image";
function FileView({ params }) {
  const db = getFirestore(app);
  const [file, setFile] = useState();
  useEffect(() => {
    // console.log(params.fileId)
    params.fileId && getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return (
    <div
      className="
    bg-black h-screen w-full flex justify-center
    items-center flex-col gap-4"
    >
      <Link href="">
        <p className="text-blue-50 text-[22px] font-black">
          Share <span className="text-primary">It</span>!
        </p>
      </Link>
      <FileItemC file={file} />
    </div>
  );
}

export default FileView;
