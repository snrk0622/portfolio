import { Skill } from "@/interfaces/_author/skill";
import { ExternalLink } from "./_author/external-link";

export type Author = {
  name: string;
  description: string;
  imagePath: string;
  skills: Skill[];
  externalLinks: ExternalLink[];
};
