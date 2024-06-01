/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {
  return (
    <>
      <Section className="flex max-lg:flex-col items-start">
        <div className="flex-[2]">
          <h2 className="font-caption text-5xl">Esteban Lopez</h2>
          <h3>Software developer and creator</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            similique doloremque enim excepturi qui consequatur?
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
