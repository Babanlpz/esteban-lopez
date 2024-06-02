/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

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
                url="/"
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
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Esteban Lopez",
    description: "Software developer and creator",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "Esteban Lopez",
    description: "Software developer and creator",
    url: "/",
  },
  {
    Logo: Rss,
    title: "Esteban Lopez",
    description: "Software developer and creator",
    url: "/",
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
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

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

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Freelance</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>

      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
