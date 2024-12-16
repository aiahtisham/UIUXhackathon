import React from "react";
export default function carousel(){
  return(
    
    <div className="sm:w-full md:wd-[80%] sm:p-5 sm:h-auto md:h[400px] flex sm:flex-col md:flex-row sm:justify-center md:justify-center sm:items-start md:items-center bg-[#23856D]">
    <div className="sm:w-full md:w-[30%] p-4 ">
      <h5 className="text-white text-[20px]"> SUMMER 2020</h5>
      <h1 className="text-white font-bold sm:text-md md:text-[58px] pt-4">Vita Classic</h1> 
      <h1 className="text-white font-bold sm:text-md md:text-[58px]">Product</h1>
      <h4 className="text-white text-[14px] pt-4">We know how large objects will act,We know</h4> 
      <h4 className="text-white text-[14px]">how are objects will act, We know</h4>  
      <h5 className="text-white text-[24px] font-bold pt-4">$16.48
        <button className=" bg-[#2DC071] w-[184] h-[52] text-white text-[14px] font-bold ml-8">Add to Cart</button></h5> 
        </div>
       <div className="sm:w-full md:w-[40%] justify-center items-center">
        <img src="image/hero2.png" alt="men" className="w-[510] h-[685] pt-10" />
        </div> 
        
  </div>
 
  )
}