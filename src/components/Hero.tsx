import Image from 'next/image';
import React from 'react';
import { ContainerTextFlip } from './ui/container-text-flip';
import { BackgroundGradient } from './ui/background-gradient';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail, 
} from '@tabler/icons-react';

import Link from 'next/link';

const words = [
  "Full Stack Developer",
  "Problem Solver",
  "ML Enthusiast",
  "Forex Trader"
];

const Hero = () => {
  return (
    <section className="w-full xl:h-[80vh] mt-20 xl:mt-52 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-52 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left: Text Content */}
        <div className="text-center h-1/2 md:text-left flex flex-col gap-4 text-neutral-500 font-semibold text-3xl sm:text-3xl md:text-4xl dark:text-neutral-400 mb-4 md:mb-0">
          <span className="flex items-center justify-center md:justify-start gap-2">
            👋🏻Hi, I&apos;m
            <span className="dark:text-orange-500 text-orange-400 font-extrabold">
              Kapil Sharma
            </span>
          </span>
          <span className="flex gap-2 items-center justify-center md:justify-start">
            a&nbsp;
            <ContainerTextFlip
              textClassName="tracking-tight font-semibold"
              animationDuration={700}
              words={words}
            />
          </span>
          from India.
          <div className="flex flex-wrap gap-4 mb-20 md:mb-0 p-2 mt-10 justify-center md:justify-normal">

            <Link
              href="https://github.com/kapilsks"
              target="_blank"
              className="group shadow-input flex h-10 items-center justify-center rounded-full px-6 py-3 font-medium text-neutral-700 dark:text-neutral-200 dark:hover:bg-white dark:hover:text-black hover:bg-neutral-900 hover:text-white transition-all duration-200"
            >
              <IconBrandGithub className="h-8 w-8 transition-transform group-hover:-translate-y-1" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/kapil-sharma-a15273257/"
              target="_blank"
              className="group shadow-input flex h-10 items-center justify-center rounded-full px-6 py-3 font-medium text-blue-600 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white hover:bg-blue-500 hover:text-white transition-all duration-200"
            >
              <IconBrandLinkedin className="h-8 w-8 transition-transform group-hover:-translate-y-1" />
            </Link>

          

            
            <Link
              href="mailto:kaushik111103@gmail.com"
              className="group shadow-input flex h-10 items-center justify-center rounded-full px-6 py-3 font-medium text-red-600 dark:text-red-400 dark:hover:text-white hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              <IconMail className="h-8 w-8 transition-transform group-hover:-translate-y-1" />
            </Link>

            <Link
              href="https://wa.me/919306304708"
              target="_blank"
              className="group shadow-input flex h-10 items-center justify-center rounded-full px-6 py-3 font-medium text-green-600 dark:text-green-400 dark:hover:text-white hover:bg-green-600 hover:text-white transition-all duration-200"
            >
              <IconBrandWhatsapp className="h-8 w-8 transition-transform group-hover:-translate-y-1" />
            </Link>

          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <BackgroundGradient className="rounded-full ">
            <Image
              src="/portfoliopic.jpg"
              alt="Hero Image"
              width={400}
              height={400}
              className="rounded-full "
            />
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
};

export default Hero;
