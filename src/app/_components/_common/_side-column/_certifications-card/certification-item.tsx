import { Certification } from '@/interfaces/_author/certification'
import Link from 'next/link'
import { LiaExternalLinkSquareAltSolid } from 'react-icons/lia'
import { PiCertificateFill } from 'react-icons/pi'

type Props = {
  certification: Certification
}

const CertificationItem: React.FC<Props> = ({ certification }) => {
  return (
    <div className="flex items-start mb-2">
      <PiCertificateFill className="mr-2 text-2xl" />
      {certification.url ? (
        <Link
          href={certification.url}
          rel="noopener noreferrer"
          target="_blank"
          className="hover:underline"
        >
          <span className="mr-1">{certification.name}</span>
          <LiaExternalLinkSquareAltSolid className="inline text-sm" />
        </Link>
      ) : (
        <div>{certification.name}</div>
      )}
    </div>
  )
}

export default CertificationItem
