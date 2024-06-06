/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import {
  ALargeSmall,
  Cake,
  ChefHat,
  Coffee,
  MessageCircle,
  Weight,
} from "lucide-react";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 ">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
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
            image="/esteban.png"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="256"
          />
          <ContactCard
            url="https://www.malt.fr/profile/estebanlopez6"
            name="@estebanlopez"
            image="/esteban.png"
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
    title: "Landing page - coffee",
    description: "Software developer and creator",
    url: "https://projet-front-end-landing-page-coffee.vercel.app/",
  },
  {
    Logo: ChefHat,
    title: "Landing page - food",
    description: "Software developer and creator",
    url: "https://landing-page-food-navy.vercel.app/",
  },
  {
    Logo: Cake,
    title: "Landing page - cake shop",
    description: "Software developer and creator",
    url: "https://landing-page-cakeshop.vercel.app/",
  },
  {
    Logo: MessageCircle,
    title: "Esteban Lopez",
    description: "Software developer and creator",
    url: "/",
  },
  {
    Logo: Weight,
    title: "Esteban Lopez",
    description: "Software developer and creator",
    url: "/",
  },
  {
    Logo: ALargeSmall,
    title: "Esteban Lopez",
    description: "Software developer and creator",
    url: "/",
  },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1601158935942-52255782d322?q=80&w=2691&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tesla",
    role: "Front-end developer",
    date: "2021 - Present",
    url: "https://www.tesla.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617727553252-65863c156eb0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Redbull",
    role: "Front-end developer",
    date: "2023- Present",
    url: "https://www.redbull.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590874315261-788881621f7a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fendi",
    role: "Front-end developer",
    date: "2023- Present",
    url: "https://www.fendi.com/",
    freelance: true,
  },
];
