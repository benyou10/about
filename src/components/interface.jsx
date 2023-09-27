import React, { useEffect, useState } from 'react';
import '../index.css'
import { motion} from 'framer-motion';
import { ValidationError, useForm } from "@formspree/react";
import sound from '/sounds/mixkit-rocket-engine-ignition-rumble-1715.wav'
const ContactSection = () => {
  const [state, handleSubmit] = useForm("xyyqndjp");
  return (
    <>
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
    </>
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

  
  <Section>
    <h2>About Me</h2>
    <p>Hello there! I’m Youcef Benziane, a 21-year-old with a passion for creativity and innovation, who boasts two years of craftsmanship. I’ve always been interested in technology and design, and my journey has been steeped in web development and design. As I progressed, I realized the transformative power of design thinking and the ability to turn ideas into powerful online experiences. I am excited to present my own website, a place to showcase my work, share insights and connect with interested colleagues. Discussion is at the heart of my philosophy, so whether you're an enthusiast, a potential collaborator, or just curious, I invite you to spread the word and join me in the world in the ever-growing field of engineering and design. Thank you for dropping by, I look forward to contacting you soon</p>
  </Section>
      
        <Section>

     <ContactSection/>

     <div className="share">
  <button className="btn1">
    <svg
      fillrule="nonzero"
      height="30px"
      width="30px"
      viewBox="0,0,256,256"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      className="instagram"
    >
      <g
        style={{ mixBlendMode: "normal" }}
        textanchor="none"
        strokedashoffset={0}
        strokedasharray=""
        strokemiterlimit={10}
        strokelinejoin="miter"
        strokelinecap="butt"
        strokewidth={1}
        stroke="none"
        fillrule="nonzero"
      >
        <g transform="scale(8,8)">
          <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
        </g>
      </g>
    </svg>
    <span className="tooltiptext1">
      <div className="cdard">
        <svg
          fill="#000000"
          width="24px"
          viewBox="0 0 24 24"
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          className="account"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <div className="username">@meoninsta</div>
    </span>
  </button>
  <button className="btn2">
    <svg
      height="30px"
      width="30px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="twitter"
    >
      <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
    </svg>
    <span className="tooltiptext2">
      <div className="cdard">
        <svg
          fill="#000000"
          width="24px"
          viewBox="0 0 24 24"
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          className="account"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <div className="username">@meontwitter</div>
    </span>
  </button>
  <button className="btn3">
    <svg
      height="30px"
      width="30px"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      className="git"
    >
      {" "}
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
    </svg>
    <span className="tooltiptext3">
      <div className="cdard">
        <svg
          fill="#000000"
          width="24px"
          viewBox="0 0 24 24"
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          className="account"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <div className="username">@meongit</div>
    </span>
  </button>
</div>

        </Section>
  
      <Section >
       
      </Section>
  
  
  
     
    </>
  );
}
