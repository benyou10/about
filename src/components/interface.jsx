import React, { useEffect, useRef, useState } from 'react';
import '../output.css'
import { motion} from 'framer-motion';
import { ValidationError, useForm } from "@formspree/react";
import sound from '/sounds/mixkit-rocket-engine-ignition-rumble-1715.wav'
import Skeleton from 'react-loading-skeleton';
import Footerr from './footer';

const ProjectCard = ({ number, title, location, imgSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      {imgSrc ? (
        <div className="max-w-[50%] overflow-hidden rounded-lg ">
          <img src="Screenshot 2023-09-30 at 10-55-33 Create Next App.png" alt={title} className="object-cover h-full w-full" />
        </div>
      ) : (
        <div className="text-6xl font-bold">{number}</div>
      )}
      <div className="text-center mt-2">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{location}</div>
      </div>
      <div className="mt-2 text-gray-500">
        <span>&#x2192;</span>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xyyqndjp");
  return (
    <>
      <h2 className="text-3xl lg:ml-9  md:text-5xl font-bold text-white">Contact me</h2>
      <div className="mt-8 lg:ml-9 p-8 rounded-md bg-red-100 bg-opacity-50 w-96 max-w-full">
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
              className="font-medium text-white block mb-1 mt-8"
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
  return (
    <motion.section className={`
      ${window.innerWidth > 1000 && "h-screen w-screen"}  p-4 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
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
const Skills = [
  {
    title : 'react /NEXT js',
    level : 90

  },
  {
    title : 'Android Studio',
    level : 70

  },
  {title:'javaScript / typeScript',
level :90
}
  ,
  {
    title : 'three js / react three fiber / react three drei' ,
    level : 70
  },
  {
    title : 'html / css / sass / tailwind-css ',
    level : 100
  },
  {
    title : 'node / express ',
    level : 80
  }
  ,{
    title :' php / laravel / blade.php',
    level :40
  },
  {
    title : 'java / Spring boot',
    level : 110
  },

]


const Video = ({ src, isLoading }) => {
  const videoRef = useRef();
  const [isVideoLoading, setIsVideoLoading] = useState(!isLoading);

  useEffect(() => {
    setIsVideoLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsVideoLoading(false);
      };
    }
  }, [src]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      {isVideoLoading ? (
        <div
          role="status"
          className="flex items-center justify-center h-56 w-[90%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
          <svg
            className="h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <video
          preload="none"
          poster='7a8f8d634013568124e130728834d47a.webp'
          className="rounded-xl max-w-[90%]"
          autoPlay
          loop
          ref={videoRef}
          onLoadedData={() => setIsVideoLoading(false)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};



export function Interface(props) {

 const [videoLoaded, setVideoLoaded] = useState(false);
 
  

  const handleVideoLoaded = () => {
    // Callback function to set videoLoaded state to true when video is loaded
    setVideoLoaded(true);
  };

const {cv,setleftBurst,leftBurst,setrightBurst,rightBurst,started}=props
const [show,setshow]=useState(false);
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Load the video
      entry.target.load();
      // Stop observing once loaded
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1  // Trigger when 10% of the video is visible
});

document.querySelectorAll('video').forEach(video => {
  observer.observe(video);
});

useEffect(()=>{
  if(started==true)
 
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
        <div className='W-screen h-screen'></div>
     
      </Section>
      
      <Section>
      <div className='flex items-center justify-center w-full h-full'>
  <div className="w-[80%] h-[100%]  ">
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 h-full ">
  <div class=" flex items-center justify-center bg-opacity-40   rounded-2xl  text-white">
  <motion.div className='m-2' whileInView={"visible"}
      
      >
    <div><h2 className='text-2xl md:text-5xl font-bold text-white ' >Skills</h2>
      <div className='mt-8 space-y-4'>
{Skills.map((skill , index) => ( 
<div className='w-64' key={index} >
<motion.h3  className='text-l font-bold text-white'


initial={{
opacity:0,
}}
variants={{
visible :{
opacity : 1,transition:{
  duration:1,
  delay : 1 * index * 0.2
}
}

}}

>{skill.title}</motion.h3>
<motion.div className="h-2 w-full bg-red-200 rounded-full " style={{width : `${skill.level}%`}}


initial={{
scaleX : 0,
originX : 0
}}
variants={{
visible :{
  scaleX : 1,transition:{
  duration:1,
  delay : 1 * index * 0.2
}
}

}}>

</motion.div>

</div>
))}

      </div>
      
      </div>
      
      </motion.div>
    </div>
 
    <div class=" flex items-center justify-center bg-opacity-40 rounded-2xl text-white">
   
<div class="max-w-sm bg-red-200 bg-opacity-80 shadow-lg rounded-lg overflow-hidden my-4">
        <img class="w-full h-56 object-cover object-center" src="Default_web_developer_in_desk_dark_theme_2_ins.webp" alt="avatar"/>
        
        <div class="py-4 px-6">
            <h1 class="text-2xl font-semibold text-gray-800">youcef benziane</h1>
            <p class="py-2 text-lg text-gray-700">Full Stack developer , i love software engeneering and to build cool UIs.</p>
           
            <a href='/Sample_CV.pdf' class="flex justify-start items-center mt-4 text-gray-700">
            <svg width="25px" height="25px"className='opacity-60' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" ></rect> <path d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 3L12 15M12 15L16 11M12 15L8 11" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <a download={true} href='/Modern_Simple_ATS_Friendly_LateX_CV-4.pdf' class="px-2 text-sm">Resume</a>
                 
            </a>
              
            <div class="flex justify-start items-center mt-4 text-gray-700">
            <svg width="25px" height="25px"className='opacity-60' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                <h1 class="px-2 text-sm">ybenzian016@gmail.com</h1>
                 
            </div>
            <div class="flex justify-start items-center mt-4 text-gray-700">
            <svg width="30px" height="30px"className='opacity-60' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#000000"></path> </g></svg>
               <a href="https://www.linkedin.com/in/youcef-benzian-291500226/"><h1 class="px-2 text-sm">linkedin</h1></a> 
                 
            </div>
            <div class="flex justify-start items-center mt-4 text-gray-700">
              <svg width="30px" height="30px" className='opacity-60' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7.90001C11.1891 7.90001 10.3964 8.14048 9.72218 8.59099C9.04794 9.0415 8.52243 9.68184 8.21211 10.431C7.90179 11.1802 7.8206 12.0046 7.9788 12.7999C8.13699 13.5952 8.52748 14.3258 9.10088 14.8992C9.67427 15.4725 10.4048 15.863 11.2001 16.0212C11.9955 16.1794 12.8198 16.0982 13.569 15.7879C14.3182 15.4776 14.9585 14.9521 15.409 14.2779C15.8596 13.6036 16.1 12.8109 16.1 12C16.1013 11.4612 15.9962 10.9275 15.7906 10.4295C15.585 9.93142 15.2831 9.47892 14.9021 9.09794C14.5211 8.71695 14.0686 8.415 13.5706 8.20942C13.0725 8.00385 12.5388 7.8987 12 7.90001ZM12 14.67C11.4719 14.67 10.9557 14.5134 10.5166 14.22C10.0776 13.9267 9.73534 13.5097 9.53326 13.0218C9.33117 12.5339 9.2783 11.9971 9.38132 11.4791C9.48434 10.9612 9.73863 10.4854 10.112 10.112C10.4854 9.73863 10.9612 9.48434 11.4791 9.38132C11.9971 9.2783 12.5339 9.33117 13.0218 9.53326C13.5097 9.73534 13.9267 10.0776 14.22 10.5166C14.5134 10.9557 14.67 11.4719 14.67 12C14.67 12.7081 14.3887 13.3873 13.888 13.888C13.3873 14.3887 12.7081 14.67 12 14.67ZM17.23 7.73001C17.23 7.9278 17.1714 8.12114 17.0615 8.28558C16.9516 8.45003 16.7954 8.57821 16.6127 8.65389C16.43 8.72958 16.2289 8.74938 16.0349 8.7108C15.8409 8.67221 15.6628 8.57697 15.5229 8.43712C15.3831 8.29727 15.2878 8.11909 15.2492 7.92511C15.2106 7.73112 15.2304 7.53006 15.3061 7.34733C15.3818 7.16461 15.51 7.00843 15.6744 6.89855C15.8389 6.78866 16.0322 6.73001 16.23 6.73001C16.4952 6.73001 16.7496 6.83537 16.9371 7.02291C17.1247 7.21044 17.23 7.4648 17.23 7.73001ZM19.94 8.73001C19.9691 7.48684 19.5054 6.28261 18.65 5.38001C17.7522 4.5137 16.5474 4.03897 15.3 4.06001C14 4.00001 10 4.00001 8.70001 4.06001C7.45722 4.0331 6.25379 4.49652 5.35001 5.35001C4.49465 6.25261 4.03093 7.45684 4.06001 8.70001C4.00001 10 4.00001 14 4.06001 15.3C4.03093 16.5432 4.49465 17.7474 5.35001 18.65C6.25379 19.5035 7.45722 19.9669 8.70001 19.94C10.02 20.02 13.98 20.02 15.3 19.94C16.5432 19.9691 17.7474 19.5054 18.65 18.65C19.5054 17.7474 19.9691 16.5432 19.94 15.3C20 14 20 10 19.94 8.70001V8.73001ZM18.24 16.73C18.1042 17.074 17.8993 17.3863 17.6378 17.6478C17.3763 17.9093 17.064 18.1142 16.72 18.25C15.1676 18.5639 13.5806 18.6715 12 18.57C10.4228 18.6716 8.83902 18.564 7.29001 18.25C6.94608 18.1142 6.63369 17.9093 6.37223 17.6478C6.11076 17.3863 5.90579 17.074 5.77001 16.73C5.35001 15.67 5.44001 13.17 5.44001 12.01C5.44001 10.85 5.35001 8.34001 5.77001 7.29001C5.90196 6.94268 6.10547 6.62698 6.36733 6.36339C6.62919 6.09981 6.94355 5.89423 7.29001 5.76001C8.83902 5.44599 10.4228 5.33839 12 5.44001C13.5806 5.33856 15.1676 5.44616 16.72 5.76001C17.064 5.89579 17.3763 6.10076 17.6378 6.36223C17.8993 6.62369 18.1042 6.93608 18.24 7.28001C18.66 8.34001 18.56 10.84 18.56 12C18.56 13.16 18.66 15.67 18.24 16.72V16.73Z" fill="#000000"></path> </g></svg>
              <a href="https://www.instagram.com/youcefbenziane.dev/"> <h1 class="px-2 text-sm">instagram</h1></a> 
                 
            </div>
        </div>
    </div>
    
    </div>
    <div class="flex items-center justify-center bg-opacity-40 rounded-2xl text-white">
      
      <div className='grid grid-cols-1 gap-6'>
      <h2 className='text-2xl md:text-5xl font-bold text-white ' >Experience</h2>
        <div className='h-28 w-80 p-3 rounded-xl bg-red-200 bg-opacity-40'>
       <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
<h1>
  Computer science degree 2020-2024
</h1>


        </div>
        <div className='h-28 w-80 p-3 rounded-xl bg-red-200 bg-opacity-40'>
    <div className='flex space-x-3'>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    </div>
    <h1>internship in sonelgaz 2024/2-2024/5</h1>
</div>

<div className='h-28 w-80 p-3 rounded-xl bg-red-200 bg-opacity-40'>
    <div className='flex space-x-3'>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    </div>
    <h1>NetDoer Software agency </h1>
</div>

      </div>
    </div>
      
        </div>
    </div>
    </div>
</Section>
<h1 className='text-2xl md:text-5xl font-bold text-white text-center '>projects</h1>

  <Section>
    <div className='flex items-center justify-center w-full h-full'>
  <div className="w-[80%] h-[100%]  bac    bg-black">
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5 h-full ">
  <div class="bg-white flex items-start justify-center bac1 text-white">
  
<Video src="2024-03-29 18-02-00.mp4" />

    </div>
    <div class="flex flex-col items-start justify-start p-5 text-white">
      <div className='flex flex-row ' >
    <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <h1 className='text-3xl mx-7'>NetDoer</h1>
        </div>
        <div >
  
 
 
      <p className='leading-relaxed '>
        A platform for enhancing knowledge in computer science with interactive learning modules.
      </p>
      <ul className='leading-relaxed list-disc list-inside font-bold'>
        <li>NextJs</li>
        <li>React threefiber </li>
        <li>React three drie</li>
        <li>NextAuth</li>

      </ul>
    
   
   
  
    
    </div>
    
       </div>
     
      
      {/* Actual video element */}
      <Video src="2024-03-29 16-43-47.mp4" />
     

    <div class=" flex items-start justify-center bac4 text-white">
    <div class="flex flex-col items-start justify-start p-5 text-white">
      <div className='flex flex-row ' >
    <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <h1 className='text-3xl mx-7'>bnk Art Galery</h1>
        </div>
        <div >
  
 
 
      <p className='leading-relaxed '>
         custom art gallery for an artist
      </p>
      <ul className='leading-relaxed list-disc list-inside font-bold'>
        <li>NextJs</li>
        <li>React threefiber </li>
        <li>React three drie</li>
       

      </ul>
    
   
   
  
    
    </div>
    
       </div>   
    </div>
       
      
        </div>
    </div>
    </div>

    
  </Section>
      <Section>
  
      <div className='flex items-center justify-center w-full h-full'>
  <div className="w-[80%] h-[100%]  bac   bg-black">
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5 h-full ">
    {window.innerWidth < 1000 ? (<> 
      <div class="bg-white flex items-start justify-center  bac1 text-white">
<Video src="2024-06-10 15-31-47.mp4"/>
</div>
    
<div class=" flex items-start justify-center bac4 text-white">
    <div class="flex flex-col items-start justify-start p-5 text-white">
      <div className='flex flex-row ' >
    <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <h1 className='text-3xl mx-7'>Sonelgaz Hr Platform with Full Access Controll</h1>
        </div>
        <div >
  
 
 
      <p className='leading-relaxed '>
        An Hr platform for the ETB Solengaz for monotoring attendence state 
      </p>
      <ul className='leading-relaxed list-disc list-inside font-bold'>
        <li>NextJs</li>
        <li>java Spring Boot</li>
        <li>tailwind</li>
        <li>mysql</li>
        <li>React threefiber </li>
      
       

      </ul>
    
   
   
  
    
    </div>
    
       </div>   
    </div>
   <div class="bg-white flex items-start justify-center bac2 text-white">
<Video src="2024-06-10 16-37-01.mp4"/>
</div>
<div class=" flex items-start justify-center bac4 text-white">
    <div class="flex flex-col items-start justify-start p-5 text-white">
      <div className='flex flex-row ' >
   
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <h1 className='text-3xl mx-7'>portfolio website</h1>
        </div>
        <div >
  
 
 
      <p className='leading-relaxed '>
        A platform for enhancing knowledge in computer science with interactive learning modules.
      </p>
      <ul className='leading-relaxed list-disc list-inside font-bold'>
        <li>html</li>
        <li>css </li>
        <li>scss </li>
        <li>javaScript</li>
       

      </ul>
    
   
   
  
    
    </div>
    
       </div>   
    </div>
</>) :(<>  <div class=" flex items-start justify-center  text-white">
    <div class="flex flex-col items-start justify-start  text-white">
      <div className='flex flex-row ' >
    <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <h1 className='text-3xl mx-7'>Sonelgaz Hr Platform with Full Access Controll</h1>
        </div>
        <div >
  
 
 
      <p className='leading-relaxed '>
        A platform for enhancing knowledge in computer science with interactive learning modules.
      </p>
      <ul className='leading-relaxed list-disc list-inside font-bold'>
      <li>NextJs</li>
        <li>java Spring Boot</li>
        <li>tailwind</li>
        <li>mysql</li>
        <li>React threefiber </li>
      
       

      </ul>
    
   
   
  
    
    </div>
    
       </div>   
    </div>
<div class="bg-white flex items-start justify-center  bac1 text-white">
<Video src="2024-06-10 15-31-47.mp4"/>
</div>
<div class=" flex items-start justify-center bac4 text-white">
    <div class="flex flex-col items-start justify-start p-5 text-white">
      <div className='flex flex-row ' >
    <svg className='block' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 3L14.5 8.5L21 9L16.5 14L18 20L15 18.5M12 17L6 20L7.5 14L3 9L9.5 8.5L10.6364 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
     
        <h1 className='text-3xl mx-7'>portfolio website</h1>
        </div>
        <div >
  
 
 
      <p className='leading-relaxed '>
        A platform for enhancing knowledge in computer science with interactive learning modules.
      </p>
      <ul className='leading-relaxed list-disc list-inside font-bold'>
      <li>html</li>
        <li>css </li>
        <li>scss </li>
        <li>javaScript</li>

      </ul>
    
   
   
  
    
    </div>
    
       </div>   
    </div>
<div class="bg-white flex items-start justify-center bac2 text-white">
<Video src="2024-06-10 16-37-01.mp4"/>
</div></>)}
 
  
    
       
      
        </div>
    </div>
    </div>

      </Section>
        <Section>

     <ContactSection/>


        </Section>
  
      <Section >
       
      </Section>
      <Section >
      <Footerr/>
       </Section>
  
  
     
    </>
  );
}
