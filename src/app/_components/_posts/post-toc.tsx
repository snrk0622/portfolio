import SideColumnContainer from '../_common/_side-column/_common/side-column-container'
import Tocbot from './_post-toc/tocbot'

const TocBox: React.FC = () => {
  return (
    <SideColumnContainer border={true}>
      <div className="mb-4 font-bold">目次</div>
      <Tocbot />
    </SideColumnContainer>
  )
}

export default TocBox
