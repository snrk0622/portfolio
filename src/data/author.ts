import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

import { Author } from "@/interfaces/author";

export const AuthorData: Author = {
  name: "snrk",
  description: "美容系メディアを運営する会社でエンジニアをしています。コーヒーと猫が好きです。",
  imagePath: "/assets/_author/snrk.png",
  skills: [
    {
      name: "JavaScript",
      years: 5,
    },
    {
      name: "TypeScript",
      years: 2,
    },
    {
      name: "React",
      years: 2,
    },
    {
      name: "Node.js",
      years: 2,
    },
    {
      name: "PHP",
      years: 3,
    },
  ],
  externalLinks: [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/snrk0622",
    },
    {
      name: "Zenn",
      icon: SiZenn,
      url: "https://zenn.dev/snrk",
    },
  ],
}