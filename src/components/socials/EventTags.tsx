import { Badge } from "@/components/ui/badge";

interface TagsProps {
  tags: string[] | undefined;
}

const EventTags = ({ tags }: TagsProps) => {
  if (tags) {
    return (
      <div className="my-4 justify-start">
        {tags.map((tag) => (
          <Badge key={tag} className="m-1 bg-muted text-foreground">{tag}</Badge>
        ))}
      </div>
    );
  }
};

export default EventTags;
