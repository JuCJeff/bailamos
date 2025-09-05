import { LogOutButton } from "@/components/auth";
import { Dashboard } from "@/components/organizer";

export default function OrganizerPage() {
  return (
    <div>
      <Dashboard />
      <LogOutButton />
    </div>
  );
}
