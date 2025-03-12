import { Button } from "@/components/ui/button";

import { useSignOut } from "@/hooks";

const LogOutButton = () => {
  const { handleSignOut } = useSignOut();

  return <Button onClick={handleSignOut}>Log out</Button>;
};

export default LogOutButton;
