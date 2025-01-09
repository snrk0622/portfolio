import SideColumnContainer from "./_common/side-column-container";
import React from "react";
import Tags from "../_tags/tags";
import { getAllTags } from "@/lib/api/tag";

type Props = {
  className?: string;
}

const TagsCard: React.FC<Props> = ({ className }) => {
  const tags = getAllTags();

  return (
    <div className={className}>
      <SideColumnContainer title="All Tags." border={false}>
        <Tags tags={tags} displayCount={true} />
      </SideColumnContainer>
    </div>
  );
}

export default TagsCard;
