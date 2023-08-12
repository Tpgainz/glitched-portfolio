"use client";
import useTypingAnimation from "@/lib/typingAnimation";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    name: "Winners Home",
    description: "A website for a local business",
    link: "https://winners-home.vercel.app/",
    github: "hello",
  },
   {
    name: "Wati Bot",
    description: "An overlay of chatgpt",
    link: "https://watibot.netlify.app/",
    github: "",
  },
  {
    name: "Pizza Regal",
    description: "A website for a local business",
    link: "https://pizza-regal.vercel.app/",
    github: "",
  },
  {
    name: "Madero",
    description: "A website for a local business",
    link: "https://madero.fr",
    github: "",
  },
  {
    name: "Glitched portfolio",
    description: "A next.js portfolio inspired by Gusbell's",
    link: "https://tpgainz.vercel.app",
    github: "",
  },
  {
    name: "Dofus Retro",
    description: "A minimalist ts clone of the game Dofus Retro",
    link: "dofus129like.vercel.app",
    github: "",
  },
];

const ProjectsPage: NextPage = () => {
  const { currentText, randomLetter } = useTypingAnimation({
    texts: "Projects",
    delay: 40,
  });

  return (
    <>
      <Link
        href="/projects"
        className="text-white text-2xl mx-auto my-10 tracking-wide font-thin uppercase md:text-3xl lg:text-5xl no-underline"
      >
        {currentText}
        {randomLetter}
      </Link>
      <div className="grid h-fit w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row place-items-center gap-y-8">
        {projects.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;

const ProjectItem = ({ name, description, link, github }: Project) => {
  const {
    currentText: nameText,
    randomLetter: randomName,
  } = useTypingAnimation({
    texts: name,
    delay: 25,
  });

  const {
    currentText: descriptionText,
    randomLetter: randomDescription,
  } = useTypingAnimation({
    texts: description,
    delay: 40,
  });

  if (!nameText || !descriptionText) return null;

  return (
    <div className="lg:w-[30vw] md:w-[40vw] h-36 w-80 h-34 px-6 py-4 bg-white bg-opacity-5 rounded-md border border-gray-500">
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-2xl text-white font-thin line-clamp-1">
          {nameText}
          {randomName}
        </h1>
        <p className="text-gray-300 font-thin line-clamp-1">
          {descriptionText} {randomDescription}
        </p>
      </div>
      <div className="flex flex-row justify-end items-center gap-8 mt-4 text-white">
        {link && (
        <Link
          href={link}
          className="text-white opacity-90 duration-200 hover:opacity-50 text-sm font-thin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
            ></path>
          </svg>
        </Link>
        )}
        {github && (
          <Link
            href={github}
            className="text-white text-sm font-thin opacity-90 duration-200 hover:opacity-50"
          >
            <Image src="/github-mark.svg" alt="github" width={24} height={24} />
          </Link>
        )}
      </div>
    </div>
  );
};
