import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { HeadBar } from "@/components/layout";
import { LogOutButton } from "@/components/auth";
import { Dashboard } from "@/components/organizer";

export default function OrganizerPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authToken = Cookies.get("auth_token");

    if (!authToken) {
      navigate("/login");
    } else if (authToken === undefined) {
      navigate("/");
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeadBar />
      <Dashboard />
      <LogOutButton />
    </div>
  );
}
