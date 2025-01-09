import { Skill } from "@/interfaces/_author/skill";
import { ExternalLink } from "./_author/external-link";
import { Certification } from "./_author/certification";

export type Author = {
  name: string;
  description: string;
  imagePath: string;
  skills: Skill[];
  certifications: Certification[];
  externalLinks: ExternalLink[];
};
