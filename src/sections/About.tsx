"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import movieImage from "@/assets/images/poorthings.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import PhpIcon from "@/assets/icons/PHP.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/stockholm.png";
import me from "@/assets/images/me.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import PythonIcon from "@/assets/icons/python.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import NodeIcon from "@/assets/icons/node.svg";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "PHP",
    iconType: PhpIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Node",
    iconType: NodeIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
];

const hobbies = [
  {
    title: "Movies",
    emoji: "🎬",
    left: "5%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵🎧",
    left: "15%",
    top: "35%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "55%",
    top: "45%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who i am, what i do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5  lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="Films" description="Current favorite:" />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={movieImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools i use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 ">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 pt-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>

                <Image src={me} alt="Me" className="size-18 rounded-full" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
