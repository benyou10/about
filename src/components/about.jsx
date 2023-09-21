import React, { useState } from 'react';
import 'src/index.css'
import { motion} from 'framer-motion';

const Skills = [
  {
    title : 'react-native / react / react NEXT',
    level : 80

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
    title : 'node / backend development / api',
    level : 80
  }
  ,{
    title :' php / laravel / blade.php',
    level :60
  },
  {
    title : 'c# / .NET',
    level : 50
  },
  {
title : 'blender / 3d modeling',
level :50
  },
  {
    title :'machine learning',
    level :70
  }
]

const languages = [
  {
    title : 'english',
    level : 90 
  },
  {title : 'french',
level : 60},
{
  title : 'arabic',
  level : 95
}
,{
  title : 'german',
  level : 30
}
]
function About() {
  const [openAboutMe,setopenAboutMe]=useState(false)
  return (
    <table >
      <th><td></td>
      <td></td> <td></td></th>
      <tbody>
        <td className='-pt-7'>
       
    <a href="https://www.linkedin.com/"> <img className=' Linkdin' src="/pngegg.png" alt="" />
     <p>LInkedin</p></a>
     <a href="https://www.indeed.com/"> <img className=' Linkdin' src="/pngegg.png" alt="" />
     <p>indeed</p></a>
     <img className='cv english' src="/pngegg(1).png" alt="" />
     <p>cv in english</p>
     <img className='cv german' src="/pngegg(1).png" alt="" />
     <p>cv in french</p>
   
     <div className={`card about
     ${openAboutMe ? "w-1/2vw opacity-100 visibility-visible  " : "w-0 opacity-0 visibility-hidden "}
   `}
     >
      <div className="titlebar">
        <span className="buttons">
          
          
          <button className="close" onClick={() => setopenAboutMe(!openAboutMe)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
              <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
            </svg>
          </button>
        </span>
      </div>
 
    </div>
    </td>
    <td   >
      <td><div><h2 className='text-3xl   text-white font-bold' >languages</h2>
        <div className='mt-8 space-y-4'>
{languages.map((lng , index) => ( 
  <div className='w-64' key={index} >
<motion.h3 className='text-xl font-bold text-white'initial={{
  opacity:0,
}}
whileInView={{
  opacity:1,
}}
transition={{
  duration:1,
  delay : 2 * index * 0.2
}}>{lng.title}</motion.h3>
<motion.div className="h-2 w-full bg-sky-300 rounded-full " style={{width : `${lng.level}%`}}

initial={{
  scaleX : 0,
  originX : 0
}}
whileInView={{
 scaleX : 1
}}
transition={{
  duration:1,
  delay : 2 * index * 0.2
}}>
  
</motion.div>

  </div>
))}

        </div>
        
        </div></td><td>
        <motion.div className='ml-40' whileInView={"visible"}
      
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
        
        </motion.div></td></td>
        </tbody>                     
    </table>
  );
}

export default About;
