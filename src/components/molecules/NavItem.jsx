import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavItem({ title, classNames }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-muted-foreground transition-colors hover:text-foreground",
        classNames
      )}
    >
      {title}
    </Link>
  );
}
