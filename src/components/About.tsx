'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import TextGenerateEffect from './ui/text-generate-effect'

const About = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const translateContent = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), {
        stiffness: 120,
        damping: 24,
        mass: 0.8,
    })

    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

    return (
        <motion.section
            ref={ref}
            style={{ opacity: opacityContent, y: translateContent }}
            id="about"
            className="mx-auto rounded-lg  flex flex-col gap-5 px-2 py-20 sm:px-10 md:px-20 lg:px-28 "
        >
            <h1 className="text-4xl sm:text-5xl  font-sans font-extrabold text-center ">
                About Me
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-18 py-10">
                <div className="md:block hidden scale-125">
                    <DotLottieReact
                        src="https://lottie.host/46ab6c13-c04f-4c3a-85b7-7422db5fe2ab/3rXet8qbCi.lottie"
                        loop
                        autoplay
                    />
                </div>
 
                <span className="font-sans w-full text-neutral-900 dark:text-neutral-100 font-semibold text-lg sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
                    <TextGenerateEffect text="I'm a Full-Stack Developer with expertise in Node.js, React, MongoDB, and Express. I enjoy building scalable, high-performance web applications, solving complex problems, and turning ideas into functional, real-world projects. I am also passionate about Machine Learning, Computer Vision, and exploring AI-powered solutions." />
                    <br/>
                    <TextGenerateEffect text="I specialize in backend systems using Node.js, Express, MongoDB, and React, while crafting smooth frontend experiences with modern UI libraries. I focus on building reliable, scalable, and maintainable architectures, optimizing systems, and integrating tools for real-world applications." />
                    <br/>
                    <TextGenerateEffect text="I have a strong grasp of core CS fundamentals including OOPs, DBMS, Operating Systems, System Design, and Computer Networks. I enjoy working on projects that let me apply this knowledge, grow my skills, collaborate effectively, and make a real impact." />
                </span> 
            </div>
        </motion.section>
    )
}

export default About
