import { getAllTags } from '@/lib/api/tag'
import React from 'react'
import Tags from '../_tags/tags'
import SideColumnContainer from './_common/side-column-container'

type Props = {
  className?: string
}

const TagsCard: React.FC<Props> = ({ className }) => {
  const tags = getAllTags()

  return (
    <div className={className}>
      <SideColumnContainer title="All Tags." border={false}>
        <Tags tags={tags} displayCount={true} />
      </SideColumnContainer>
    </div>
  )
}

export default TagsCard
