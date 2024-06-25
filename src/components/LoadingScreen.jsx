import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import '../index.css'

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();
const [starting,setstarting]= useState(false)
  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 50) {
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
      <div class="flex justify-center items-center h-screen">
  <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
</div> :
setStarted(true)

}
    </div>
  );
};