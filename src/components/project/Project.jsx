import styles from "./project.module.css";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/images/exercise.jpg";
import img2 from "@/images/movie_posters.jpg";
import img3 from "@/images/wordle.jpg";

function Project() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-6">
      <div className={`${styles.project_grid} `}>
        <div className=" group shadow-xl hover:bg-green-500 rounded p-1 bg-slate-700">
         <Link href={'https://react-fitness-app-five.vercel.app/'}><Image src={img1} alt="project" className="h-full " /></Link> 
        </div>
        <div className="shadow-xl hover:bg-green-500 rounded p-1 bg-slate-700">
        <Link href={'https://react-movie-app-phi-orcin.vercel.app/'}><Image src={img2} alt="project" className="h-full " /></Link>  
        </div>
        <div className="shadow-xl hover:bg-green-500 rounded p-1 bg-slate-700">
         <Link href={'https://react-wordle-murex-alpha.vercel.app/'}><Image src={img3} alt="project" className="h-full" /></Link> 
        </div>
       
      </div>
    </div>
  );
}

export default Project;
