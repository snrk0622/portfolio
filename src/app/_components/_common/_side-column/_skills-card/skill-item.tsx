import Link from 'next/link'
import { IoIosLink } from 'react-icons/io'
import { PiSealQuestionDuotone } from 'react-icons/pi'

import { Skill } from '@/interfaces/_author/skill'
import { getTagByName } from '@/lib/api/tag'

type Props = {
  skill: Skill
}

const MAX_YEARS = 10

const SkillItem: React.FC<Props> = ({ skill }) => {
  const tag = getTagByName(skill.name)

  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        {tag && tag.icon ? (
          <tag.icon className="text-lg" />
        ) : (
          <PiSealQuestionDuotone className="text-lg" />
        )}
        <Link
          href={`/tags/${skill.name}`}
          className="flex items-center hover:underline"
        >
          <div className="ml-2">{skill.name}</div>
          <IoIosLink className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div className="flex">
        {[...Array(MAX_YEARS)].map((_, i) => {
          const year = i + 1
          const size =
            year === skill.years ||
            (year === MAX_YEARS && skill.years > MAX_YEARS)
              ? 'w-3/12'
              : 'w-1/12'
          const color =
            year <= skill.years
              ? 'bg-light-sub dark:bg-dark-sub text-light-base dark:text-dark-base'
              : 'border bg-opacity-10 border-opacity-20 dark:bg-opacity-10 dark:border-opacity-20'
          const years =
            year === skill.years && year <= MAX_YEARS
              ? `${skill.years} 年`
              : year === MAX_YEARS && skill.years > MAX_YEARS
                ? `${MAX_YEARS} 年以上`
                : ''
          return (
            <div
              key={`${skill.name}-${year}`}
              className={`mr-1 text-2xs text-center bg-light-sub dark:bg-dark-sub border border-light-sub dark:border-dark-sub ${size} ${color}`}
            >
              {years}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillItem
