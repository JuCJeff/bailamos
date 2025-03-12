import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";

import { auth } from "@/firebase/config";

import { getFirebaseErrorMessage } from "@/helper/firebaseErrors";

interface LoginFormData {
  email: string;
  password: string;
}

const useEmailLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleEmailLogin = async (data: LoginFormData) => {
    try {
      // Sign in with email and password
      const { email, password } = data;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

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

  return { loading, error, handleEmailLogin };
};

export default useEmailLogin;
