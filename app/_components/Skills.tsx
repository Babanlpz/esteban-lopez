import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { OpenAiLogo } from "./icons/OpenAiLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working with
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />

          <h3 className="mb-2 text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also <Code>Next.Js</Code>{" "}
            as a backend and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />

          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Tailwind
          </h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>beautiful</u> application <i>in seconds</i> using{" "}
            <Code>TailwindCSS</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <OpenAiLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />

          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            AI Integration
          </h3>
          <p className="text-sm text-muted-foreground">
            I am an expert of integrating AI in your applications to create a
            perfect <u>user experience</u>.
          </p>
        </div>
      </div>
    </Section>
  );
};
