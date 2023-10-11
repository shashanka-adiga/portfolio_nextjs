import Image from "next/image";
import profile from "@/images/profile.jpg";
import styles from "./about.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMailOption } from "react-icons/gr";
import Link from "next/link";


function About() {
  return (
    <div className="  flex items-center justify-around px-4 py-6 max-h-screen w-screen ">
      <div className={`${styles.about_grid} shadow-lg rounded px-4 py-6 bg-slate-800 hover:scale-[102%]`}>
        <div className="p-1 rounded">
          <Image src={profile} className="rounded-full object-contain"/>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-slate-200">
            <p>Hi, my name is Shashanka</p>
            <p>
              I'm a fullstack developer specializing in <strong> Reactjs , Nextjs and Nodejs</strong>  .
            </p>
            <a href="/resume.pdf" download="shashanka_resume">
            <button className="hover:bg-pink-400 px-4 py-2 mt-3 md:mt-2 text-white font-bold bg-pink-500 w-fit">
              Download CV
            </button>

            </a>
            
          </div>
          <div>
            <p className="font-bold mt-3 text-purple-500">social links:</p>
            <div className="flex w-[200px] justify-evenly items-center mt-2 py-1 px-2">
              <div className="text-3xl bg-black  p-[9px] rounded drop-shadow-lg">
                <Link href="https://github.com/shashanka-adiga">
                  <BsGithub className="text-white" />{" "}
                </Link>
              </div>

              <div className="text-3xl bg-[#0072B1] p-2 rounded drop-shadow-lg" >
                <Link href="https://www.linkedin.com/in/shashanka-adiga-484218195/">
                  {" "}
                  <BsLinkedin />
                </Link>
              </div>

              <div className="text-3xl bg-red-600 p-2 rounded drop-shadow-lg">
                <Link href="mailto:shashankaadiga01@gmail.com">
                  <GrMailOption />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
