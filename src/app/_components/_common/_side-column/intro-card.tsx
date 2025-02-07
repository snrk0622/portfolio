import SideColumnContainer from '@/app/_components/_common/_side-column/_common/side-column-container'
import { AuthorData } from '@/data/author'
import Avatar from './_intro-card/avatar'

const IntroCard: React.FC = () => {
  const { name, description, imagePath, externalLinks } = AuthorData

  return (
    <SideColumnContainer border={true}>
      <Avatar name={name} imagePath={imagePath} externalLinks={externalLinks} />
      <div className="mt-4 opacity-50">{description}</div>
    </SideColumnContainer>
  )
}

export default IntroCard
