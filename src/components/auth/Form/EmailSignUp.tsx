import { useForm, Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";
import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useEmailSignUp } from "@/hooks/auth";

import type { SignUpFormData } from "@/types/formTypes";

const EmailSignUp = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const { loading, error, handleEmailSignup } = useEmailSignUp();

  const onSubmit = async (data: SignUpFormData) => {
    await handleEmailSignup(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="firstName"
                type="text"
                placeholder="John"
                required
              />
            )}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="lastName"
                type="text"
                placeholder="Doe"
                required
              />
            )}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <Input {...field} id="password" type="password" required />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: "Please confirm your password",
              validate: (value) => {
                const { password } = getValues();
                return value === password || "Passwords do not match";
              },
            }}
            render={({ field }) => (
              <Input {...field} id="confirmPassword" type="password" required />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm text-start">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </motion.div>

        {/* Display error if any */}
        {error && (
          <p className="text-red-500 text-sm text-start mt-2">{error}</p>
        )}
      </div>
    </form>
  );
};

export default EmailSignUp;
