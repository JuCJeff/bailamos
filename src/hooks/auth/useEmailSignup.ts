import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";

import { getFirebaseErrorMessage } from "@/helper/firebaseErrors";

import { auth, db } from "@/firebase/config";

import type { SignUpFormData } from "@/types/formTypes";

const useEmailSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleEmailSignup = async (data: SignUpFormData) => {
    setLoading(true);
    setError(null);

    const { email, password, firstName, lastName } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "organizers", user.uid), {
        userId: user.uid,
        email: user.email,
        firstName,
        lastName,
        createdAt: new Date(),
      });

      // Sign in for the user and save the auth token
      const idToken = await user.getIdToken();
      Cookies.set("auth_token", idToken, { expires: 30 });
      navigate("/organizer");
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.error("Firebase error:", err.message);
        setError(getFirebaseErrorMessage(err.code));
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

  return { loading, error, handleEmailSignup };
};

export default useEmailSignUp;
