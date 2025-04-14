export const music = [
  {
    id: "bachata",
    label: "Bachata",
  },
  {
    id: "salsa",
    label: "Salsa",
  },
  {
    id: "merengue",
    label: "Merengue",
  },
  {
    id: "cumbia",
    label: "Cumbia",
  },
  {
    id: "zouk",
    label: "Zouk",
  },
];

export type Tag = {
  name: string;
  bgColor: string;
  shadowColor: string;
};

export const tagStylesList: Tag[] = [
  {
    name: "Bachata",
    bgColor: "#22c55e",
    shadowColor: "rgba(34, 197, 94, 0.3)",
  },
  {
    name: "Salsa",
    bgColor: "#f97316",
    shadowColor: "rgba(249, 115, 22, 0.3)",
  },
  {
    name: "Merengue",
    bgColor: "#f43f5e",
    shadowColor: "rgba(244, 63, 94, 0.3)",
  },
  {
    name: "Cumbia",
    bgColor: "#3b82f6",
    shadowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    name: "Zouk",
    bgColor: "#8b5cf6",
    shadowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    name: "Others",
    bgColor: "#6b7280",
    shadowColor: "rgba(107, 114, 128, 0.3)",
  },
];
