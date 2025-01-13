import { ExternalLink } from '@/interfaces/_author/external-link'
import Link from 'next/link'

type Props = {
  externalLink: ExternalLink
}

const ExternalLinkIcon: React.FC<Props> = ({ externalLink }) => {
  return (
    <Link href={externalLink.url}>
      <externalLink.icon className="w-5 h-5 mr-4" />
    </Link>
  )
}

export default ExternalLinkIcon
