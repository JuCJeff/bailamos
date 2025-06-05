import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { FirebaseError } from "firebase/app";
import { auth, db } from "@/firebase/config";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

const useGoogleLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userId = user.uid;

      if (userId) {
        const organizerRef = doc(db, "organizers", userId);
        const docSnap = await getDoc(organizerRef);

        if (!docSnap.exists()) {
          await setDoc(organizerRef, {
            userId,
            email: user.email ?? "",
            firstName: "",
            lastName: "",
            socialMediaLink: "",
            websiteLink: "",
            createdAt: serverTimestamp(),
          });
        }

        const idToken = await user.getIdToken();
        Cookies.set("auth_token", idToken, {
          expires: 30,
          secure: true,
        });

        setSuccess(true);
        navigate("/organizer");
      }
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.error("Firebase error:", err.message);
        setError("Failed to log in with Google, please try again");
      } else if (err instanceof Error) {
        console.error("Error:", err.message);
        setError("An error occurred, please try again");
      } else {
        console.error("An unknown error occurred", err);
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, handleGoogleLogin };
};

export default useGoogleLogin;
