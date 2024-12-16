import React from "react";

export default function topsection (){
return(
  <div >
    <section className="bg-cover bg-center h-screen flex items-center "
      style={{ backgroundImage: 'url(/image/background.png)' }}
    >
      <div className="container mx-auto px-8">
        <div className="ml-40 text-white">
          <h5 className="text-[16px] text-[#252B42] font-bold mb-4">ABOUT COMPANY</h5>
          <h1 className="text-[58px] text-[#252B42] font-bold mb-6">ABOUT US</h1>
          <h4 className="text-[20px] text-[#252B42]  ">We know how large objects will act,</h4> 
          <h4 className="text-[20px] text-[#252B42]  mb-10">but things on a small scale</h4>
          
          
          <button className="bg-[#23A6F0] border w-[195px] h-[52px] text-white rounded-lg text-[14px] font-bold ">
            Get Quote Now
          </button>
        </div>
      </div>
    </section>
  </div>
)
}