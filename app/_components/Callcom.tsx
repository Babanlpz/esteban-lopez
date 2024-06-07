"use client";

import { Badge } from "@/components/ui/badge";
import { CalComEmbed } from "./CalComEmbed";
import { Section } from "./Section";

export const CallCom = () => {
  return (
    <>
      <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Call me</Badge>
        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
          Schedule a call with me
        </h2>
        <p className="text-lg text-muted-foreground mt-1 lg:mt-2">
          10 minutes to talk about your project and how I can help you.
        </p>
      </Section>
      <Section>
        <CalComEmbed />
      </Section>
    </>
  );
};
