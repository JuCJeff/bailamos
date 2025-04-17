import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface OragnizerSocialLinkProps {
  link: string;
}

const OragnizerSocialLink = ({ link }: OragnizerSocialLinkProps) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Button variant="link" onClick={handleClick}>
      <InstagramLogoIcon />
    </Button>
  );
};

export default OragnizerSocialLink;
