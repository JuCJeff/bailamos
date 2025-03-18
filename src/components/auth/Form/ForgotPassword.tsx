import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

import { usePasswordResetEmail } from "@/hooks/auth";

import type { ForgotPasswordFormData } from "@/types/formTypes";

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const { loading, error, handlePasswordResetEmail } = usePasswordResetEmail();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: ForgotPasswordFormData) => {
    await handlePasswordResetEmail(data);
    setIsSubmitted(true);

    console.log("Reset email sent to:", data.email);
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.stopPropagation(); // Prevents the event from bubbling up to the parent form
    handleSubmit(onSubmit)(e);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Forgot your password?</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Reset Password</DialogTitle>
              <DialogDescription>
                Check your inbox for a password reset email!
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Reset Password</DialogTitle>
              <DialogDescription>
                Enter your registered email for a password reset
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleForgotPasswordSubmit}>
              <div className="items-center mb-4">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <Input {...field} id="email" placeholder="Email" />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm text-start mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {error && (
                <p className="text-red-500 text-sm text-start mt-2">{error}</p>
              )}
              <DialogFooter>
                <Button type="submit">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Send Reset Email"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPassword;
