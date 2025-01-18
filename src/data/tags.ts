import { Tag } from '@/interfaces/tag'

// https://react-icons.github.io/react-icons/
import { FaAws, FaBook } from 'react-icons/fa'
import { FaDartLang, FaFlutter } from 'react-icons/fa6'
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
  { id: 'javascript', name: 'JavaScript', icon: SiJavascript },
  { id: 'typescript', name: 'TypeScript', icon: SiTypescript },
  { id: 'react', name: 'React', icon: SiReact },
  { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs },
  { id: 'nodejs', name: 'Node.js', icon: SiNodedotjs },
  { id: 'tailwindcss', name: 'tailwindcss', icon: SiTailwindcss },
  { id: 'php', name: 'PHP', icon: RiPhpFill },
  { id: 'aws', name: 'AWS', icon: FaAws },
  { id: 'sql', name: 'SQL', icon: TbSql },
  { id: 'book', name: '読書', icon: FaBook },
  { id: 'readable-code', name: 'リーダブルコード' },
  { id: 'dart', name: 'Dart', icon: FaDartLang },
  { id: 'flutter', name: 'Flutter', icon: FaFlutter },
]
