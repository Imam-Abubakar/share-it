import Image from "next/image";
import React, { useEffect, useState } from "react";

function FileInfo({ file }) {
  const [fileType, setFileType] = useState();
  useEffect(() => {
    file && setFileType(file?.fileType.split("/")[0]);
    console.log(fileType);
  }, [file]);
  return (
    file && (
      <div
        className="text-center border
     flex justify-center m-4 flex-col items-center p-2 rounded-lg
     border-blue-200"
      >
        <p className="text-blue-50 text-[22px] font-black">
          Share <span className="text-primary">It</span>!
        </p>
        <div className="">
          <h2>{file.fileName}</h2>
          <h2 className="text-gray-400 text-[13px]">
            {file.fileType} / {file.fileSize}
          </h2>
        </div>
      </div>
    )
  );
}

export default FileInfo;
