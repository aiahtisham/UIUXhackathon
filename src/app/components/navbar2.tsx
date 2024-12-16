import React from "react"
import Link from "next/link"

export default function navbar2(){
  return(
    
      <header className ="bg-#252B42 border-b mx-auto flex-col w-[1322px] h-[91px] gap-40px">
        

        <div className="bg-white flex justify-between text-grey items-center px-8 py-4">
          <h1 className="text-[24px] font-bold text-[#252B42] ml-12"> Bandage</h1>
          <nav className="md:flex items-center space-x-8 text-2xl ">
            <Link href="/" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">Home</Link>
            <Link href="/shop" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">Product</Link>
            <Link href="/about" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">About</Link>
            <Link href="/price" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">Pricing</Link>
            <Link href="/contact" className="text-[#737373] text-[14px] font-bold hover:text-black hover:font-normal">Contact</Link>
          </nav>
          
          <div className="text-[#23A6F0] flex items-center space-x-6">
             
             <a href="#" className="mr-4 font-bold text-[14px]">Login</a>
             
             <button className="bg-[#23A6F0] text-white px-3 py-1 rounded w-[214px] h-[52px]">Become a member</button>
             

          </div>

        </div>
      </header>
    
  )
}