import React, { useEffect, useState } from 'react';
import '../index.css'
export const    Card = (props) => {
  const { cv,setcv,onSectionChange, menuOpened, setMenuOpened,section } = props;
  const [setting, setSetting] = useState(false);const [show,setshow]=useState(false);

useEffect(()=>{setTimeout(() => {
  setshow(true)
}, 6000);},[])

  return (

<>
{section == 0 && 
    
    < div >
    {show == true ?<> <div class="button-container">
      <button class="button" onClick={() => setMenuOpened(!menuOpened)}  >
        <h1>menu</h1>
      </button>
  
     

      <button class="button" onClick={() => setcv(!cv)}>
      <h1>resume</h1>
      </button>
    </div></> :<></>}

   
  

    <div className={`card 
     ${menuOpened ? "w-1/2vw opacity-70 visibility-visible  " : "w-0 opacity-0 visibility-hidden "}
   `}
     >
      <div className="titlebar">
        <span className="buttons">
          
          
          <button className="close" onClick={() => setMenuOpened(!menuOpened)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
              <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
            </svg>
          </button>
        </span>
      </div>
      <div className="cppcode">
   <h1> <a>About</a></h1>
   <h1> <a>Skills</a></h1>
   <h1> <a>Contact</a></h1>
   <h1>fov <label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
</label></h1>
   <h1>change camera position <label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
</label></h1>
   <h1><p>hi my name is youcef benziane 
    the about section includes things about my life
    if you just waited little bit you can see all of it  </p></h1>
      </div>
    </div>
    </div>
  }</>);
}

