import { FaGithub } from "react-icons/fa";
import { SiQiita } from "react-icons/si";
import { SiZenn } from "react-icons/si";

import { Author } from "@/interfaces/author";

export const AuthorData: Author = {
  name: "Riki Shinohara",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imagePath: "/assets/_author/snrk.jpeg",
  skills: [
    {
      name: "JavaScript",
      years: 5,
    },
    {
      name: "TypeScript",
      years: 3,
    },
    {
      name: "React",
      years: 11,
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
    {
      name: "Qiita",
      icon: SiQiita,
      url: "https://qiita.com/snrk",
    },
  ],
}