import React from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl"
import Navbar2 from "../components/navbar2";
import Heropicture from "../components/heropicture";
import Footer from "../components/footer";
import Sectionteam from "../components/sectionteam";
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";


export default function team(){
  return (
    <div>
      <Navbar2/>

      <section>
      <div className="flex flex-col items-center justify-center my-8">
        <div className="text-[#737373] text-[16px] font-bold ">WHAT WE DO</div>
        <div className="text-[#252B42] text-[58px] font-bold">Innovation tailored for you</div>
        <div className="items-center flex mb-6">
        <Link href="/" className="text-[14px] font-bold text-[#252B42] mr-4">Home</Link>
        <SlArrowRight className="w-[9px] h-[16px] mr-4"/>
        <a href="#" className="text-[14px] font-bold text-[#737373]">Team</a>
        </div>  
        </div>
      </section>   

              <Heropicture/>

      
            <section className="text-center">
              <h3 className="text-[40px] font-bold text-[#252B42] m-20">Meet Our Team</h3>
              
              <Sectionteam/>
              <Sectionteam/>
              <Sectionteam/>

            </section>
      
      <section>
        <div className="flex flex-col items-center justify-center my-8">
        <div className="text-[#252B42] text-[40px] font-bold my-5"><h2>Start your 14 days free trial</h2></div>
        <div className="text-[#737373] text-[14px] ">
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor</p> 
          <p className="mb-5 text-center">do met sent. RELIT official consequent.</p></div>

        <div>
          <button className="bg-[#23A6F0] text-white font-bold text-[14px] w-[186px] h-[52px] mt-2 mb-6">Try it free now</button>
        </div> 
        <div className="flex justify-center items-center gap-5 mb-10">
          <FaTwitter className="text-[#55ACEE] w-[30px] h-[24.49px]"/>
          <IoLogoFacebook className="text-[#395185] w-[30px] h-[30px]"/>
          <FaInstagram className="text-[#55ACEE] w-[30px] h-[30px]"/>
          <TiSocialLinkedin className="bg-[#0A66C2] text-white w-[30px] h-[29.88px]"/>
       </div> 
        </div>
      </section>  

      <Footer/>
      </div>
  )
}