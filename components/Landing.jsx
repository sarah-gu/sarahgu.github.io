import { useState } from "react";

export const Landing = () => {
	return (
	<section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-10 backdrop-blur-[200px]" />
      <div className="md:-left-[28rem] -left-40 -top-40 md:-top-[28rem] bg-neon-red absolute opacity-60 dark:opacity-30 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="md:-right-[28rem] -right-40 -bottom-40 md:-bottom-[28rem] bg-neon-green absolute opacity-60 dark:opacity-30 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="relative z-20 px-12 py-24 mx-auto flex flex-col max-w-7xl items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 md:flex-row">

        {/* Text */}
        <div className="z-10 flex flex-col gap-4 text-center md:text-left">
          <h1
            data-aos="zoom-y-out"
            className="text-5xl font-bold leading-tight tracking-tighter text-gray-800 md:text-7xl dark:text-gray-100"
          >
            Sarah Gu
          </h1>
          <div>div</div>     <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg text-gray-600 md:text-xl dark:text-gray-400"
          >
            Computer Scientist.
          </p>
        </div>
        
      </div>
    </section>
	); 
}; 

