import { Tag } from '@/interfaces/tag'

// https://react-icons.github.io/react-icons/
import { FaAws } from 'react-icons/fa'
import { RiPhpFill } from 'react-icons/ri'
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'

export const TagsData: Tag[] = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'tailwindcss', icon: SiTailwindcss },
  { name: 'PHP', icon: RiPhpFill },
  { name: 'AWS', icon: FaAws },
  { name: 'SQL', icon: TbSql },
]
