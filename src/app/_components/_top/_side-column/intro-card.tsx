import { AuthorData } from "@/data/author";
import Avatar from "./_intro-card/avatar";

const IntroCard: React.FC = () => {
  const { name, description, imagePath, externalLinks } = AuthorData;

  return (
    <div className="border p-4">
      <Avatar name={name} imagePath={imagePath} externalLinks={externalLinks} />
      <div className="mt-4 opacity-50">{description}</div>
    </div>
  )
}

export default IntroCard;
