import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

import { findTagStyles } from "@/helper/eventDisplay";
import type { MusicPercentage } from "@/types/eventTypes";

interface MusicPercentagesProps {
  musicList: MusicPercentage[];
}

const MusicPercentages = ({ musicList }: Readonly<MusicPercentagesProps>) => {
  const chartData = musicList
    .filter((music) => music.percentage > 0)
    .map((music) => {
      const tagStyles = findTagStyles(music);
      if (!tagStyles) return null;

      const key = music.name.toLowerCase().replace(/\s+/g, "_");

      return {
        key,
        label: music.name,
        value: music.percentage,
        fill: tagStyles.bgColor,
      };
    })
    .filter(Boolean) as {
    key: string;
    label: string;
    value: number;
    fill: string;
  }[];

  const chartConfig: ChartConfig = chartData.reduce((acc, item) => {
    acc[item.key] = {
      label: item.label,
      color: item.fill,
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <Card className="flex flex-col mt-6">
      <CardHeader className="items-center pb-0">
        <CardTitle>Music Percentages</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="label" />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius="80%"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="key" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default MusicPercentages;
