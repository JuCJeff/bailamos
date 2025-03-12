import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { LoginForm, SignUpForm } from "@/components/auth/Form";

export default function Authentication() {
  return (
    <div className="flex min-h-full w-full items-center justify-center p-10 max-sm:p-4">
      <div className="w-full max-w-sm">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log in</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
