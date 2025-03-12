import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";

import { useGoogleLogin } from "@/hooks";

const GoogleLogin = () => {
  const { loading, error, success, handleGoogleLogin } = useGoogleLogin();

  return (
    <>
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
      <Toaster />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500">Successful! Redirecting...</p>}
    </>
  );
};

export default GoogleLogin;
