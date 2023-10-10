import styles from "./project.module.css";
import Image from "next/image";
import img1 from "@/images/exercise.jpg";
import img2 from "@/images/movie_posters.jpg";
import img3 from "@/images/wordle.jpg";

function Project() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-6">
      <div className={`${styles.project_grid} `}>
        <div className="shadow-xl hover:bg-green-500 rounded p-1 bg-slate-700">
          <Image src={img1} className="h-full " />
        </div>
        <div className="shadow-xl hover:bg-green-500 rounded p-1 bg-slate-700">
          <Image src={img2} className="h-full " />
        </div>
        <div className="shadow-xl hover:bg-green-500 rounded p-1 bg-slate-700">
          <Image src={img3} className="h-full" />
        </div>
        <div className="shadow-xl hover:bg-green-500 rounded p-1 bg-slate-700">
          <Image src={img2} className="h-full" />
        </div>
        <div className="shadow-xl hover:bg-green-500 rounded p-1 bg-slate-700">
          <Image src={img1} className="h-full" />
        </div>
        <div className="shadow-xl hover:bg-green-500 rounded p-1">
          <Image src={img1} className="h-full" />
        </div>
      </div>
    </div>
  );
}

export default Project;
