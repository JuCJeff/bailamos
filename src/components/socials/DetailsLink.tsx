import { Button } from "@/components/ui/button";

interface DetailsLinkProps {
  link: string;
}

const DetailsLink = ({ link }: DetailsLinkProps) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Button variant="link" onClick={handleClick} className="text-md">
      Event Details
    </Button>
  );
};

export default DetailsLink;
