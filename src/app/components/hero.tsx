import React from "react"

export default function hero(){
  return(
    <div>
      
      <section className="h-[716px] flex items-center"
      style={{ backgroundImage: 'url(/image/bg3.jpg)' }}
    >
      <div className="container mx-auto px-8 ml-20">
        <div className="ml-40 text-white">
          <h5 className="text-[16px] text-white font-bold mb-4">SUMMER 2020</h5>
          <h1 className="text-[58px] text-white font-bold mb-4">NEW COLLECTION</h1>
          <h4 className="text-[20px] text-white ">We know how large objects will act,</h4> 
          <h4 className="text-[20px] text-white font-bold mb-10">but things on a small scale.</h4>  
         
          
          <button className="bg-[#2DC071] w-[221px] h-[62px] text-white rounded-lg text-[24px] font-bold ">
            <h3>SHOP NOW</h3>
          </button>
        </div>
      </div>
    </section>

      <div>
        <h1 className="font-bold text-center mt-10 text-[24px]">
          EDITORS PICK
        </h1>
        <p className="text-[14px] text-center mt-2">
          Problem try to resolve the conflict between
        </p>
        </div>
      </div>
    
  )
}