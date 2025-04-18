import { Timestamp } from "firebase/firestore";

export interface OrganizerProfileData {
  email: string;
  firstName: string;
  lastName: string;
  createdAt?: Timestamp;
  socialMediaLink?: string;
  websiteLink?: string;
}
