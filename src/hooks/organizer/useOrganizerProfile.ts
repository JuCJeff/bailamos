import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";

import { auth, db } from "@/firebase/config";

import type { OrganizerProfileData } from "@/types/organizerTypes";

const useOrganizerProfile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<OrganizerProfileData | null>(
    null
  );

  useEffect(() => {
    const token = Cookies.get("auth_token");

    if (token) {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const organizerRef = doc(db, "organizers", user.uid);
          const docSnap = await getDoc(organizerRef);

          if (docSnap.exists()) {
            setProfileData(docSnap.data() as OrganizerProfileData);
          } else {
            setError("No organizer data found");
          }
        } else {
          setError("User not authenticated");
        }
        setLoading(false);
      });

      // Clean up the subscription when the component unmounts or token changes
      return () => unsubscribe();
    } else {
      setLoading(false);
      setError("No authentication token found. Please log in");
    }
  }, []);

  return { loading, error, profileData };
};

export default useOrganizerProfile;
