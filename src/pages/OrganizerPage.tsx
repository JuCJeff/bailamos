import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { HeadBar } from "@/components/layout";
import { LogOutButton } from "@/components/auth";
import { Dashboard } from "@/components/organizer";

export default function OrganizerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = Cookies.get("auth_token");

    if (!authToken) {
      navigate("/login");
    } else if (authToken === undefined) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <HeadBar />
      <Dashboard />
      <LogOutButton />
    </div>
  );
}
