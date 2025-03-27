import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { EventForm } from "./EventForm";
import Profile from "./Profile";

const Dashboard = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex flex-col gap-6 m-2", className)} {...props}>
      <Card className="min-h-svh">
        <CardHeader>
          <CardTitle className="text-2xl">Organizer Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex min-h-full w-full items-center justify-center p-2 max-sm:p-0">
            <div className="w-full max-w-sm justify-center">
              <Tabs defaultValue="create-post" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="create-post">Create Post</TabsTrigger>
                  <TabsTrigger value="post">Posts</TabsTrigger>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                </TabsList>
                <TabsContent value="create-post">
                  <EventForm />
                </TabsContent>
                <TabsContent value="post">Previous posts</TabsContent>
                <TabsContent value="profile">
                  <Profile />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
