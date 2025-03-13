import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { auth } from "@/firebase/config";
import { getFirebaseErrorMessage } from "@/helper";

import type { ForgotPasswordFormData } from "@/types/formTypes";

const usePasswordResetEmail = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handlePasswordResetEmail = async (data: ForgotPasswordFormData) => {
    const { email } = data;

    try {
      setLoading(true);
      setError(null);

      await sendPasswordResetEmail(auth, email);
      navigate("/login");
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        setError(getFirebaseErrorMessage(err.code));
      } else {
        setError("An unexpected error occurred. Please try again");
      }
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handlePasswordResetEmail };
};

export default usePasswordResetEmail;
