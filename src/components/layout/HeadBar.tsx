import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { useNavigate } from "react-router-dom";

const HeadBar = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex sticky top-0 justify-between py-8 px-5 bg-transparent transition-all max-sm:flex-col gap-2`}
      style={{
        transitionDuration: ".15s",
        transitionProperty: "background-color",
        transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
      }}
    >
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Bailamos
      </h1>
      <div className="flex gap-2 max-sm:flex-col items-center">
        <div className="flex">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => navigate("/organizer")}>
            Organizer
          </Button>
        </div>
        <Input placeholder="search" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default HeadBar;
