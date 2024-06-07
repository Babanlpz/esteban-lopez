import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full p-4 flex flex-col gap-2">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          I love working with
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="rounded-xl border text-card-foreground shadow p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex flex-col items-center gap-4 w-full md:w-1/3">
            <ReactLogo
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
            <h3 className="mb-2 text-2xl font-semibold tracking-tight">
              React
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              My main framework is <Code>React</Code>. I also{" "}
              <Code>Next.Js</Code> as a backend and frontend framework.
            </p>
          </div>
          <div className="rounded-xl border text-card-foreground shadow p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex flex-col items-center gap-4 w-full md:w-1/3">
            <TailwindLogo size={42} />
            <h3 className="mb-2 text-2xl font-semibold tracking-tight">
              Tailwind
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              I can create <u>beautiful</u> application <i>in seconds</i> using{" "}
              <Code>TailwindCSS</Code>.
            </p>
          </div>
          <div className="rounded-xl border text-card-foreground shadow p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex flex-col items-center gap-4 w-full md:w-1/3">
            <FirebaseIcon size={42} style={{ animationDuration: "10s" }} />
            <h3 className="mb-2 text-2xl font-semibold tracking-tight">
              Firebase
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              I specialize in leveraging <Code>Firebase</Code> to build scalable
              and secure applications, ensuring a seamless{" "}
              <u>user experience</u>.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
