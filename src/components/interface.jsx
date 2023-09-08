import React from 'react';
import '/home/youcef/Desktop/r3f-vite-starter/src/index.css'
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
    <section className={`
        w-screen h-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
        `}>
      {children}
    </section>
  );
}

export function Interface() {
  return (
    <>
    <div className="flex flex-col items-center w-screen"></div>
      <Section >
      <h1 className='youcef'>youcef benziane</h1>
      <button className='btn'>
  MENU
</button>
<button className='butoom btn'>
  CONTROLE
</button>
      </Section>
      <Section>
        <div><h2 className='text-5xl font-bold text-white ' >Skills</h2>
        <div className='mt-8 space-y-4'>
{Skills.map((skill , index) => ( 
  <div className='w-64' key={index} >
<h3 className='text-xl font-bold text-white'>{skill.title}</h3>
<div className="h-2 w-full bg-teal-300 rounded-full " style={{width : `${skill.level}%`}}>

</div>

  </div>
))}

        </div>
        
        </div>
        <div><h2 className='text-5xl text-white font-bold' >languages</h2>
        <div className='mt-8 space-y-4'>
{languages.map((lng , index) => ( 
  <div className='w-64' key={index} >
<h3 className='text-xl font-bold text-white'>{lng.title}</h3>
<div className="h-2 w-full bg-sky-300 rounded-full " style={{width : `${lng.level}%`}}>
  
</div>

  </div>
))}

        </div>
        
        </div>
      </Section>
  
      <Section>
      <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
          <form>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="bg-primary border-primary w-full rounded border p-3 transition hover:bg-opacity-90"
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
