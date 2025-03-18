import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";
import Cookies from "js-cookie";

import type { OrganizerProfileData } from "@/types/organizerTypes";

const useUpdateProfile = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const updateProfile = async (profileData: OrganizerProfileData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const token = Cookies.get("auth_token");

    if (token) {
      try {
        await auth.currentUser?.getIdToken(true); // Force refresh the token if necessary

        const user = auth.currentUser;

        if (user) {
          const organizerRef = doc(db, "organizers", user.uid);
          await updateDoc(
            organizerRef,
            profileData as Partial<OrganizerProfileData>
          );
          setSuccess(true);
        } else {
          setError("User not authenticated");
        }
      } catch (err) {
        console.error("Error updating profile:", err);
        setError("Failed to update profile. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setError("No authentication token found. Please log in again.");
    }
  };

  return { loading, error, success, updateProfile };
};

export default useUpdateProfile;
