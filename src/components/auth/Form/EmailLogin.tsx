import { useForm, Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useEmailLogin } from "@/hooks";

interface LoginFormData {
  email: string;
  password: string;
}

const EmailLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const { loading, error, handleEmailLogin } = useEmailLogin();

  const onSubmit = async (data: LoginFormData) => {
    await handleEmailLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
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
            <p className="text-red-500 text-sm text-start">{errors.email.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
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

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Please wait
            </>
          ) : (
            "Login"
          )}
        </Button>

        {/* Display error if any */}
        {error && <p className="text-red-500 text-start mt-2">{error}</p>}
      </div>
    </form>
  );
};

export default EmailLogin;
