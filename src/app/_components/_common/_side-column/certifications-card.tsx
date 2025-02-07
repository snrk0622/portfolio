import SideColumnContainer from '@/app/_components/_common/_side-column/_common/side-column-container'

import CertificationItem from '@/app/_components/_common/_side-column/_certifications-card/certification-item'
import { AuthorData } from '@/data/author'

const CertificationsCard: React.FC = () => {
  const { certifications } = AuthorData

  return (
    <SideColumnContainer title="Certifications." border={true}>
      <div className="mt-2">
        {certifications.map((certification) => (
          <CertificationItem
            key={certification.name}
            certification={certification}
          />
        ))}
      </div>
    </SideColumnContainer>
  )
}

export default CertificationsCard
