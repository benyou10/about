import React, { useEffect, useState } from 'react';
import '../index.css'
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
     
      </Section>
    </>
  );
}
