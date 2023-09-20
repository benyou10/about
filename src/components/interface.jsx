import React, { useEffect, useState } from 'react';
import '/home/youcef/Desktop/r3f-vite-starter/src/index.css'
import { motion} from 'framer-motion';


function Section(props) {
  const { children } = props;
  useEffect(()=>{},[])
  return (
    <motion.section className={`
        w-screen h-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
        `}    
        initial={{
          opacity:0,
          y:10
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1,
          delay : 0.5
        }}
        
        >
      {children}
    </motion.section>
  );
}

export function Interface(props) {
const {cv,setleftBurst,leftBurst,setrightBurst,rightBurst}=props

 
  return (
    <>
    <div className="flex flex-col items-center w-screen"></div>
  
    

        <div  >


<h1  className='youcef  text-[60px] md:text-[100px]' >youcef benziane </h1>

</div>




      <Section >
      
      </Section>

  
  
      <Section>
      <div className="w-full px-4 lg:w-1/2 xl:w-5/12 
">
        <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
          <form>
           
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
           
            <div className="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary border-primary w-full rounded border p-3 transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
          </div></div>
         
      </Section>
    </>
  );
}
