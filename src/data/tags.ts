import { Tag } from "@/interfaces/tag";

// https://react-icons.github.io/react-icons/
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export const TagsData: Tag[] = [
  { name: "JavaScript", icon: SiJavascript, },
  { name: "TypeScript", icon: SiTypescript, },
  { name: "React", icon: SiReact, },
  { name: "Next.js", icon: SiNextdotjs, },
  { name: "tailwindcss", icon: SiTailwindcss, },
];