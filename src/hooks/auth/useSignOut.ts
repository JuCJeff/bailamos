import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";

import { auth } from "@/firebase/config";

const useSignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await signOut(auth);
      console.log(response);

      Cookies.remove("auth_token");
      navigate("/login");
    } catch (error) {
      console.error("Error during sign out: ", error);
    }
  };

  return { handleSignOut };
};

export default useSignOut;
