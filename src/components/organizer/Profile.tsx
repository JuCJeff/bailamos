import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Profile = () => {
  return (
    <div className="mt-4">
      <ul className="flex-col gap-4">
        <li className="flex gap-1 items-center text-start">
          Email <Input placeholder="jucjeff96@gmail.com" disabled />
        </li>
        <li className="flex gap-1 items-center text-start">
          Firstname <Input placeholder="Jeff" />
        </li>
        <li className="flex gap-1 items-center text-start">
          Lastname <Input placeholder="Ma" />
        </li>
        <li className="flex gap-1 items-center text-start">
          Social media account <Input />
        </li>
        <li className="flex gap-1 items-center text-start">
          Website link <Input />
        </li>
      </ul>
      <Button className="mt-4">Update Profile</Button>
    </div>
  );
};

export default Profile;
