/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";
const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50 border-accent px-1 py-0.5 text-primary rounded-sm",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <>
      <Section className="flex max-lg:flex-col items-start">
        <div className="flex-[2]">
          <h2 className="font-caption font-bold text-5xl text-primary">
            Esteban Lopez
          </h2>
          <h3 className="text-3xl font-caption">
            Software developer and creator
          </h3>
          <p className="text-base">
            I love creating content on{" "}
            <Code className="inline-flex items-center gap-1">
              <LinkedinIcon size={16} className="inline" />
              Linkedin
            </Code>
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/esteban.png"
            className="w-full h-auto max-w-sm"
            alt="Esteban's picture"
          />
        </div>
      </Section>
    </>
  );
};
