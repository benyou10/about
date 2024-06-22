import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import '../index.css'

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();
const [starting,setstarting]= useState(false)
  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setstarting(true);
      }, 1);
    }
  }, [progress, total, loaded, item]);
console.log(item);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 
  flex items-center justify-center bg-black 
  ${started ? "opacity-0 hidden " : "opacity-100"}`}
    >
		{ starting == false ?
   <div class="loader">
   <div class="square" id="sq1"></div>
   <div class="square" id="sq2"></div>
   <div class="square" id="sq3"></div>
   <div class="square" id="sq4"></div>
   <div class="square" id="sq5"></div>
   <div class="square" id="sq6"></div>
   <div class="square" id="sq7"></div>
   <div class="square" id="sq8"></div>
   <div class="square" id="sq9"></div>
 </div> :
<button onClick={()=>setStarted(true)} class="bbtn" type="button">
  <strong>START</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
}
    </div>
  );
};