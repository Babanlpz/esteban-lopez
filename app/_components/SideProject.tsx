import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  target?: "_blank";
};
export const SideProject = (props: {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  target?: "_blank";
}) => {
  return (
    <Link
      href={props.url}
      passHref
      target="_blank"
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
