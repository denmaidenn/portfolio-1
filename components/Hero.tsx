"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const typedDescriptionRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedDescriptionRef.current) return;

    const typed = new Typed(typedDescriptionRef.current, {
      strings: [
        '<span class="text-purple">Backend Developer</span> on a partner project, responsible for developing <span class="text-purple">CRUD functionalities</span>, designing <span class="text-purple">REST APIs</span>, and managing data to support application requirements.',
        'I build <span class="text-purple">scalable backend services</span>, design <span class="text-purple">database workflows</span>, and integrate APIs with modern frontend applications.',
        'Focused on <span class="text-purple">Laravel, Express.js, FastAPI</span>, and reliable data systems for real project needs.',
      ],
      typeSpeed: 32,
      backSpeed: 18,
      backDelay: 1800,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center px-4">
        <div className="w-full max-w-[89vw] md:max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_420px] items-center">
            <div className="space-y-6 text-center md:text-left">
              <p className="tracking-widest text-sm md:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto md:mx-0">
                Hi! I&apos;m Raffa Danendra Pramono
              </p>

              <TextGenerateEffect
                words="Software Engineering Student at IPB University"
                className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl"
              />

              <p className="mx-auto min-h-[5rem] max-w-2xl text-sm md:mx-0 md:min-h-[6.75rem] md:text-lg md:tracking-wider lg:text-2xl">
                <span ref={typedDescriptionRef} />
              </p>

              <a href="https://drive.google.com/file/d/1EV4YA6Farmqen1afV3yaw7JEJC8yoMqI/view?usp=sharing" target="_blank" rel="noreferrer">
                <MagicButton
                  title="Lihat CV"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>

            <div className="mx-auto w-full max-w-[420px]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-purple/20 blur-3xl" />
                <div className="absolute -bottom-10 left-6 h-20 w-20 rounded-full bg-blue/20 blur-3xl" />

                <div className="flex h-full flex-col items-center justify-center gap-6">
                  <div className="relative h-80 w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
                    <img src="/raffa.png" alt="Photo card" className="h-full w-full object-cover" />
                  </div>

                  <div className="w-full rounded-3xl border border-white/10 bg-black/50 p-4 text-center">
                    <p className="text-base font-medium text-white">Raffa Danendra Pramono</p>
                    <p className="mt-2 text-sm text-slate-300">+62 878 0562 7343  |  raffadnd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
