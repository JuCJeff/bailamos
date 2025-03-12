import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import EmailLogin from "./EmailLogin";
import GoogleLogin from "./GoogleLogin";

const LoginForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <EmailLogin />
          </div>

          <div className="mt-6">
            <GoogleLogin />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
