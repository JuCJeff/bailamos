import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";

export const useOrganizerSocialLink = () => {
  const [socialLink, setSocialLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialLink = async () => {
      const user = auth.currentUser;
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "organizers", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const profileData = docSnap.data();
          setSocialLink(profileData?.socialMediaLink ?? null);
        }
      } catch (error) {
        console.warn("Could not fetch organizer social link:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialLink();
  }, []);

  return { socialLink, loading };
};
