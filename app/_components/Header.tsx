import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MaltIcon } from "./icons/MaltIcon";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 py-4">
        <Section className="flex items-baseline">
          <h1 className="text-lg font-bold text-primary">baban.com</h1>
          <div className="flex-1" />
          <ul className="flex items-center gap-2">
            <Link
              href="https://github.com/Babanlpz"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GithubIcon size={12} className="text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/estebanlopezdev/"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <LinkedinIcon size={12} className="text-foreground" />
            </Link>
            <Link
              href="https://www.malt.fr/profile/estebanlopez6"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <MaltIcon size={12} className="text-foreground" />
            </Link>
          </ul>
        </Section>
      </header>
    </>
  );
};
