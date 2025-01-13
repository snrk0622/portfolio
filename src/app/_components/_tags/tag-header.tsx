import { Tag } from '@/interfaces/tag'
import { FaHashtag } from 'react-icons/fa'

type Props = {
  tag: Tag
}

const TagHeader: React.FC<Props> = ({ tag }) => {
  return (
    <div className="w-full sm:w-5/6 mx-auto my-8 sm:my-14 place-items-center">
      {tag.icon ? (
        <tag.icon className="mr-2 w-14 h-14" />
      ) : (
        <FaHashtag className="mr-2" />
      )}
      <h1 className="text-5xl leading-relaxed font-bold mb-5">{tag.name}</h1>
    </div>
  )
}

export default TagHeader
