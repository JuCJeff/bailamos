import { Link2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface DetailsLinkProps {
  link: string;
}

const DetailsLink = ({ link }: DetailsLinkProps) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Button variant="outline" onClick={handleClick} className="text-sm mt-2">
      <Link2Icon/> Event Link
    </Button>
  );
};

export default DetailsLink;
