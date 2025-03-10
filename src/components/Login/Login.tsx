import { LoginForm } from "@/components/Login/LoginForm";

export default function Login() {
  return (
    <div className="flex min-h-full w-full items-center justify-center p-10 max-sm:p-4">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
