/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import {
  Cake,
  ChefHat,
  Coffee,
  KeyboardMusicIcon,
  Notebook,
  ScanFaceIcon,
} from "lucide-react";
import { Code } from "./Code";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";
import { CssIcon } from "./icons/CssIcon";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { HtmlIcon } from "./icons/HtmlIcon";
import { JavaIcon } from "./icons/JavaIcon";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { TypeIcon } from "./icons/TypeIcon";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 ">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">
            Side, fun projects.
            <Code className="mx-1">
              <HtmlIcon size={16} className="inline" />
            </Code>
            <Code className="mx-1">
              <CssIcon size={16} className="inline" />
            </Code>
            <Code className="mx-1">
              <JavaIcon size={16} className="inline" />
            </Code>
            <Code className="mx-1">
              <ReactLogo size={16} className="inline" />
            </Code>
            <Code className="mx-1">
              <TailwindLogo size={16} className="inline" />
            </Code>
            <Code className="mx-1">
              <TypeIcon size={16} className="inline" />
            </Code>{" "}
            <Code className="mx-1">
              <FirebaseIcon size={16} className="inline" />
            </Code>
          </p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="https://www.linkedin.com/in/estebanlopezdev/"
            name="@estebanlopezdev"
            image="./esteban.webp"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="256"
          />
          <ContactCard
            url="https://www.malt.fr/profile/estebanlopez6"
            name="@estebanlopez"
            image="./esteban.webp"
            mediumImage="https://play-lh.googleusercontent.com/pCYfqB1v-c9Phmvjxji_v37Lf1l59fg1pIy17PztwmS2yoRvGtNAgHZlOHQf0AQo_MZv"
            description="Freelance"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Coffee,
    title: "Landing page - Coffee",
    description: "Application Developer and Designer",
    url: "https://projet-front-end-landing-page-coffee.vercel.app/",
  },
  {
    Logo: ChefHat,
    title: "Landing page - Food",
    description: "Programmer and Builder",
    url: "https://landing-page-food-navy.vercel.app/",
  },
  {
    Logo: Cake,
    title: "Landing page - Cake shop",
    description: "Tech Developer and Creator",
    url: "https://landing-page-cakeshop.vercel.app/",
  },
  {
    Logo: Notebook,
    title: "System Reservation - Spa / Coiffeur",
    description: "Developer and creator",
    url: "https://projet-full-stack-systeme-reservation.vercel.app/",
  },
  {
    Logo: ScanFaceIcon,
    title: "Authentication System and Registration ",
    description: "Software Specialist and Producer",
    url: "https://projet-full-stack-authentificationsysteme.vercel.app/",
  },
  {
    Logo: KeyboardMusicIcon,
    title: "Piano virtual",
    description: "App Developer and Creator",
    url: "https://piano-virtuel.vercel.app/",
  },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://chips-website-design.netlify.app/assets/images/home-chips.png",
    title: "Chips",
    role: "Front-end developer",
    date: "2024 - Present",
    url: "https://chips-website-design.netlify.app/",
  },
  {
    image:
      "https://sneakers-website-design.netlify.app/assets/img/sneaker-1.png",
    title: "Sneakers",
    role: "Front-end developer",
    date: "2023- Present",
    url: "https://sneakers-website-design.netlify.app/",
  },
  {
    image: "https://stid.com/us/stid.svg",
    title: "Stid",
    role: "Front-end developer",
    date: "2024 - Present",
    url: "https://stid.com/us/",
    freelance: true,
  },
];
