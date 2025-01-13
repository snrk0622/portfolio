import { ExternalLink } from '@/interfaces/_author/external-link'
import ExternalLinkIcon from './_avatar/external-link-icon'

type Props = {
  name: string
  imagePath: string
  externalLinks: ExternalLink[]
}

const Avatar: React.FC<Props> = ({ name, imagePath, externalLinks }) => {
  return (
    <div className="flex items-center">
      <img src={imagePath} className="w-14 h-14 rounded-full mr-4" alt={name} />
      <div>
        <div className="text-xl font-bold mb-2">{name}</div>
        <div className="flex flex-wrap">
          {externalLinks.map((externalLink, index) => (
            <ExternalLinkIcon key={index} externalLink={externalLink} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Avatar
