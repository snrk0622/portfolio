import Link from "next/link";
import { ExternalLink } from "@/interfaces/_author/external-link";

type Props = {
  externalLink: ExternalLink;
};

const ExternalLinkIcon: React.FC<Props> = ({ externalLink }) => {
  return (
    <Link href={externalLink.url}>
      <externalLink.icon className="h-4 mr-2" />
    </Link>
  );
}

export default ExternalLinkIcon;
