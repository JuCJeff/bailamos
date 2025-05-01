export interface LocationDetails {
  propertyName: string;
  address: string;
  city: string | undefined;
  state: string | undefined;
  googleMapsUrl: string | undefined;
  lat: number | undefined;
  lng: number | undefined;
}

export type MusicPercentage = {
  name: string;
  percentage: number;
};

export type Location = {
  propertyName?: string;
  address?: string;
  city?: string;
  state?: string;
  googleMapsUrl?: string;
  lat?: number;
  lng?: number;
};

export type Social = {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  price: number;
  description?: string;
  imageUrl?: string;
  link?: string;
  eventTags?: string[];
  music: string[];
  musicPercentages: Record<string, MusicPercentage>;
  websiteLink?: string;
  organizerSocialLink?: string;
  location?: Location;
};
