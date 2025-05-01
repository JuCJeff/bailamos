import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import { formatDateLine, formatTimeLine } from "../utils";

interface FooterContentProps {
  createdAt: Date;
  socialLink: string | undefined;
  websiteLink: string | undefined;
}

const FooterContent = ({
  createdAt,
  socialLink,
  websiteLink,
}: FooterContentProps) => {
  const handleWebsiteClick = () => {
    window.open(websiteLink, "_blank", "noopener,noreferrer");
  };

  const handleSocialClick = () => {
    window.open(socialLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {websiteLink && (
        <div className="text-center mt-2">
          <h3 className="text-md text-primary font-bold">Organizer website</h3>
          <Button variant="link" onClick={handleWebsiteClick}>
            {websiteLink}
          </Button>
        </div>
      )}

      {socialLink && (
        <Button variant="link" aria-label="Instagram Link" onClick={handleSocialClick}>
          <InstagramLogoIcon />
        </Button>
      )}

      <p className="text-xs tracking-tight">
        Posted on {formatDateLine(createdAt)} {formatTimeLine(createdAt)}
      </p>
    </div>
  );
};

export default FooterContent;
