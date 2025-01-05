import SideColumnContainer from "./_common/side-column-container";
import React from "react";
import Tags from "../_tags/tags";
import { getAllTags } from "@/lib/api/tag";

const TagsCard: React.FC = () => {
  const tags = getAllTags();

  return (
    <SideColumnContainer title="Tags." border={false}>
      <Tags tags={tags} displayCount={true} />
    </SideColumnContainer>
  );
}

export default TagsCard;
