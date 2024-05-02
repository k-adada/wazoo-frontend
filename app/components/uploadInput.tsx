import React, { useRef } from "react";
import Image from "next/image";
import Icons from "../Icons";

const UploadInput = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    fileInput.current!.click();
  };

  return (
    <div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={(event) => {
          console.log(event.target.files);
        }}
      />
      <div
        className="rounded-full bg-slate-300 p-2 ml-2 pointer"
        onClick={handleDivClick}
      >
        <Image src={Icons.sunDarkIcon} alt="user" width={30} height={30} />
      </div>
    </div>
  );
};

export default UploadInput;
