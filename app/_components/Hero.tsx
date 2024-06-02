/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MaltIcon } from "./icons/MaltIcon";
const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 text-primary rounded-sm",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <>
      <Section className="flex max-lg:flex-col items-start gap-4 ">
        <div className="flex-[3] w-full flex flex-col gap-2">
          <h2 className="font-caption font-bold text-5xl text-primary">
            Esteban Lopez
          </h2>
          <h3 className="text-3xl font-caption">
            Software developer and creator
          </h3>
          <p className="text-base">
            I love creating content on{" "}
            <Link href="https://www.linkedin.com/in/estebanlopezdev/">
              <Code className="inline-flex items-center gap-1">
                <LinkedinIcon size={16} className="inline" />
                Linkedin
              </Code>
            </Link>
            , currently freelance and open to new opportunities, i am available
            on{" "}
            <Link href="https://www.linkedin.com/in/estebanlopezdev/">
              <Code className="inline-flex items-center gap-1">
                <MaltIcon size={16} className="inline" />
                Malt
              </Code>
            </Link>
            . Living in{" "}
            <Link href="https://www.linkedin.com/in/estebanlopezdev/">
              <Code className="inline-flex items-center gap-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/langfr-450px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
                  style={{ width: 16, height: "auto" }}
                  alt="Drapeau de la France"
                />
                France
              </Code>
            </Link>
            .
          </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto ">
          <img
            src="/esteban.png"
            className="w-full h-auto max-w-sm max-md:w-56"
            alt="Esteban's picture"
          />
        </div>
      </Section>
    </>
  );
};
