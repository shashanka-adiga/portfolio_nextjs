function Experience() {
  return (
    <main>
      <div className=" w-full min-h-full flex flex-col gap-2 container mx-auto px-4 py-6">
        <div className="hover:scale-[102%]  rounded shadow-lg px-6 py-4 flex flex-col gap-2 bg-slate-800">
          <h1 className="text-slate-100 font-bold">
            Tech Mahindra,{" "}
            <span className="text-slate-200 font-semibold">
              Software Engineer
            </span>{" "}
          </h1>
          <h1 className=" px-[2px] py-1 text-teal-300 text-xs font-medium leading-5 w-fit" >01/23 – present</h1>
          <p className="text-slate-400 leading-tight">
          worked on an e-commerce website built with Next.js. My main contributions were
          developed the product pages using Next.js's server-side rendering (SSR) capabilities to ensure that they loaded quickly 
          used Next.js's built-in performance optimizations, such as image optimization and code splitting, to ensure that the website loaded quickly and ran smoothly on all devices.
          </p>
          <div className="flex justify-normal items-start  px-2 py-1 w-[300px]">
            <h1 className="border rounded-full px-3 py-1 text-teal-300 text-xs font-medium leading-5 mr-2">
              Nextjs
            </h1>
            <h1 className="border rounded-full px-3 py-1 text-teal-300 text-xs font-medium leading-5 mr-2">
              Tailwind
            </h1>
            <h1 className="border rounded-full px-3 py-1 text-teal-300 text-xs font-medium leading-5">
              Mongodb
            </h1>
          </div>
        </div>

        <div className="hover:scale-[102%] rounded shadow-lg bg-slate-800 px-6 py-4 flex flex-col gap-2">
          <h1 className="text-slate-100 font-bold">
            CleanKoding, 
            <span className="text-slate-200 font-semibold">
              Software Engineer
            </span>
          </h1>
          <h1 className=" px-[2px] py-1 text-teal-300 text-xs font-medium leading-5 w-fit" >05/22 – 01/23</h1>
          <p className="text-slate-400 leading-tight">
            worked on a social media web application built with React.js. My main contributions were
            developed the user interface using React.js's component-based architecture to create reusable and maintainable code
            mplemented user interactions, such as liking and commenting on posts, using React.js's event handling features
          </p>
          <div className="flex justify-normal items-start  px-2 py-1 w-[300px]">
            <h1 className="border rounded-full px-3 py-1 text-teal-300 text-xs font-medium leading-5 mr-2">
              Reactjs
            </h1>
            <h1 className="border rounded-full px-3 py-1 text-teal-300 text-xs font-medium leading-5">
              Tailwind
            </h1>
          </div>
        </div>

        <div className="hover:scale-[102%] rounded shadow-lg bg-slate-800 px-6 py-4 flex flex-col gap-2">
          <h1 className="text-slate-100 font-bold">
            Tata Consultancy Service, 
            <span className="text-slate-200 font-semibold">
              Assistant System Engineer
            </span>
          </h1>
          <h1 className=" px-[2px] py-1 text-teal-300 text-xs font-medium leading-5 w-fit" >01/21 – 04/22</h1>
          <p className="text-slate-400 leading-tight">
          worked on a full-stack web application built with React, SCSS, and Express.
          I worked with the design team to create a responsive and user-friendly design for the web application that looked great on all devices and was easy to navigate.
          used SCSS, a preprocessor for CSS, to style the front-end of the web application. SCSS allows me to write more concise and maintainable CSS code
          </p>
          <div className="flex justify-normally items-start  px-2 py-1 w-[300px]">
            <h1 className="border rounded-full px-3 py-1 text-teal-300 text-xs font-medium leading-5 mr-2">
              Reactjs
            </h1>
            <h1 className="border rounded-full px-3 py-1 text-teal-300 text-xs font-medium leading-5 mr-2">
              scss
            </h1>
            <h1 className="border rounded-full px-3 py-1 text-teal-300 text-xs font-medium leading-5">
              Expressjs
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Experience;
