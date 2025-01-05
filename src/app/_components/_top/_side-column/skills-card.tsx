import SideColumnContainer from "@/app/_components/_top/_side-column/_common/side-column-container";
import SkillItem from "./_skills-card/skill-item";

import { AuthorData } from "@/data/author";

const SkillsCard: React.FC = () => {
  const { skills } = AuthorData;

  return (
    <SideColumnContainer title="Skills." border={true}>
      <div className="mt-2">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </SideColumnContainer>
  );
}

export default SkillsCard;
