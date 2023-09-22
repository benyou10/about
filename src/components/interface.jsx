import React, { useEffect, useState } from 'react';
import '../index.css'
import { motion} from 'framer-motion';
import { ValidationError, useForm } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xyyqndjp");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-white text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label for="name" className="font-medium text-white block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-white block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
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


<h1  className='youcef  text-[40px] md:text-[100px]' >youcef benziane </h1>

</div>




      <Section >
      
      </Section>

  
  
      
        
     <ContactSection/>
     <Section >
      
      </Section>
      <Section >
      
      </Section>
  
     
    </>
  );
}
