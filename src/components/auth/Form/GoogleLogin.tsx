import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import * as motion from "motion/react-client";

import { useGoogleLogin } from "@/hooks/auth";

const GoogleLogin = () => {
  const { loading, error, success, handleGoogleLogin } = useGoogleLogin();

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          variant="outline"
          disabled={loading}
          className="w-full"
          onClick={handleGoogleLogin}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Please wait
            </>
          ) : (
            "Login with Google"
          )}
        </Button>
      </motion.div>
      <Toaster />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500">Successful! Redirecting...</p>}
    </>
  );
};

export default GoogleLogin;
