import { Tag } from '@/interfaces/tag'
import { getTagCount } from '@/lib/api/tag'
import Link from 'next/link'
import { FaHashtag } from 'react-icons/fa'

type Props = {
  tag: Tag
  displayCount: boolean
}

const TagChip: React.FC<Props> = ({ tag, displayCount }) => {
  const count = getTagCount(tag.name)

  return (
    <Link
      href={`/tags/${tag.name}`}
      key={tag.name}
      className="flex items-center border border-light-sub dark:border-dark-sub rounded-md px-2 py-1 mr-2 my-1 text-xs text-light-sub dark:text-dark-sub bg-light-sub dark:bg-dark-sub bg-opacity-10 dark:bg-opacity-10 hover:bg-opacity-30 dark:hover:bg-opacity-30"
    >
      {tag.icon ? (
        <tag.icon className="mr-2" />
      ) : (
        <FaHashtag className="mr-2" />
      )}
      <span className="mr-2">{tag.name}</span>
      {displayCount && (
        <span className="text-2xs text-light-sub dark:text-dark-sub">
          ( {count} )
        </span>
      )}
    </Link>
  )
}

export default TagChip
