import React from "react";

export default function listing(){
  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <img src="image/pic0.png" alt="men" className="w-[510px] h-[500]  "/>
        <img src="image/pic1.png" alt="women"className="w-[240px] h-[500] "/>
      </div>
       <div className="flex flex-col justify-center items-center">
        <img src="image/pic3.png" alt="men" className="w-[240px] h-[242]"/>
        <img src="image/pic4.png" alt="women" className="w-[240px] h-[242]"/>
      </div>
    </div>
  )
}