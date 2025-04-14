import { tagStylesList } from "@/data/event";

import type { MusicPercentage } from "@/types/eventTypes";

export function findTagStyles(music: MusicPercentage) {
  return (
    tagStylesList.find((tagListItem) => tagListItem.name === music.name) || null
  );
}
