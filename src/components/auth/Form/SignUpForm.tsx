import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import EmailSignUp from "./EmailSignUp";
import GoogleLogin from "./GoogleLogin";

const SignUpForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <EmailSignUp />
          </div>

          <div className="mt-6">
            <GoogleLogin />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpForm;
