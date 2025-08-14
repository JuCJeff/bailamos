import { useAuth } from "@/contexts";
import { HeadBar } from "@/components/layout";
import { LogOutButton } from "@/components/auth";
import { Dashboard } from "@/components/organizer";

export default function OrganizerPage() {
  const { user, organizerProfile } = useAuth();

  return (
    <div>
      <HeadBar />
      <Dashboard />
      <LogOutButton />
    </div>
  );
}
