import { Card, CardContent } from "@/components/ui/card";
import { findTagStyles } from "@/helper/eventDisplay";
import type { MusicPercentage } from "@/types/eventTypes";

interface MusicPercentagesProps {
  musicList: MusicPercentage[];
}

const MusicPercentagesProgressList = ({
  musicList,
}: Readonly<MusicPercentagesProps>) => {
  // Max percentage takes up the whole row
  const maxPercentage = Math.max(...musicList.map((music) => music.percentage));

  const chartData = musicList
    .filter((music) => music.percentage > 0)
    .map((music) => {
      const tagStyles = findTagStyles(music);
      if (!tagStyles) return null;

      return {
        label: music.name,
        percentage: music.percentage,
        color: tagStyles.bgColor,
      };
    })
    .filter(Boolean) as {
    label: string;
    percentage: number;
    color: string;
  }[];

  return (
    <div className="mt-4">
      <h3 className="text-md font-bold">Music Distribution</h3>
      <Card className="mt-2">
        <CardContent className="space-y-4 px-4">
          {chartData.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground">
                  {item.percentage}%
                </span>
              </div>
              <div className="relative h-4 w-full overflow-hidden">
                <div
                  className="absolute h-full rounded-sm"
                  style={{
                    width: `${(item.percentage / maxPercentage) * 100}%`, // Scale according to max percentage
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MusicPercentagesProgressList;
