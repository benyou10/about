import React, { useEffect, useState } from 'react';
import '../index.css'
import { motion} from 'framer-motion';
import { ValidationError, useForm } from "@formspree/react";
import sound from '/sounds/mixkit-rocket-engine-ignition-rumble-1715.wav'
const ContactSection = () => {
  const [state, handleSubmit] = useForm("xyyqndjp");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-white text-center">Thanks htmlFor your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium text-white block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              htmlFor="email"
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
              htmlFor="email"
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


const {cv,setleftBurst,leftBurst,setrightBurst,rightBurst,started}=props
const [show,setshow]=useState(false);

useEffect(()=>{
  if(started==true)
  new Audio(sound).play()
  document.body.classList.add("no-scroll")},[])
  useEffect(()=>{setTimeout(() => {
    setshow(true)
  }, 6000);},[])

 const togglelright = () =>{
  setrightBurst(!rightBurst)
 }
 const toggleleft = () =>{
  setleftBurst(!leftBurst)
 }
  return (
    <>
    <div className="flex flex-col items-center w-screen"></div>
  
    

        <div  >


<h1  className='youcef md:mt-7 text-4xl md:text-[100px]' >youcef benziane </h1>

</div>




      <Section >
        
        <button onClick={togglelright} className='shifter right' ></button><button onMouseDown={toggleleft} className='shifter left'></button>
     {show == true ? <div class="cookie-card" >
        <img src="/ykb.JPG" alt="my photo" />
    <span class="title"> HI welcome to my website</span>
    <p class="description">you can toggle right or left to turn the scene, or you can click on the icon below , it will gives you 2 option you can view my resume or you can toggle the menu and change the settings like the fov </p>
    <div class="actions">
      
        <button onClick={()=>setshow(false)} class={` accept 
        ${show == false ? "hidden":""}
        `}>
            thanks
        </button>
    </div>
</div>:<div></div>  }
      </Section>

  
  
      
        
     <ContactSection/>
  
      <Section >
       
      </Section>
  
  
  
     
    </>
  );
}
