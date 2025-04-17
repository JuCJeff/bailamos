import { Button } from "@/components/ui/button";

interface DetailsLinkProps {
  link: string;
}

const DetailsLink = ({ link }: DetailsLinkProps) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Button variant="link" onClick={handleClick} className="text-sm max-sm:underline">
      Event Link
    </Button>
  );
};

export default DetailsLink;
