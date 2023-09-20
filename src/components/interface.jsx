import React from 'react';
import '/home/youcef/Desktop/r3f-vite-starter/src/index.css'
import { motion} from 'framer-motion';

// Rename the component to avoid naming conflicts
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
function Section(props) {
  const { children } = props;

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

export function Interface() {


 
  return (
    <>
    <div className="flex flex-col items-center w-screen"></div>
  
    

        <div  >


<h1 className='youcef  ' >youcef benziane </h1>
</div>


{}

      <Section >

      </Section>

      <Section>
        
 
        <div><h2 className='text-5xl font-bold text-white ' >Skills</h2>
        <div className='mt-8 space-y-4'>
{Skills.map((skill , index) => ( 
  <div className='w-64' key={index} >
<motion.h3  className='text-l font-bold text-white'


initial={{
  opacity:0,
}}
whileInView={{
  opacity:1,
}}
transition={{
  duration:1,
  delay : 1 * index * 0.2
}}

>{skill.title}</motion.h3>
<motion.div className="h-2 w-full bg-teal-300 rounded-full " style={{width : `${skill.level}%`}}


initial={{
  scaleX : 0,
  originX : 0
}}
whileInView={{
 scaleX : 1
}}
transition={{
  duration:1,
  delay : 1 * index * 0.2
}}>

</motion.div>

  </div>
))}

        </div>
        
        </div>
        <div><h2 className='text-5xl text-white font-bold' >languages</h2>
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
        
        </div>
      </Section>
  
      <Section>z
      <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
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
