import { Skill } from '@/interfaces/_author/skill'
import { Certification } from './_author/certification'
import { ExternalLink } from './_author/external-link'

export type Author = {
  name: string
  description: string
  imagePath: string
  skills: Skill[]
  certifications: Certification[]
  externalLinks: ExternalLink[]
}
