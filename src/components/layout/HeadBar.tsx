import { useEffect, useState, useRef } from "react";
import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LocationSelection from "./LocationSelection";

import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const HeadBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const headBarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const height = headBarRef.current?.offsetHeight ?? 0;
      const scrollTop = window.scrollY;

      if (scrollTop > height && !scrolled) {
        setScrolled(true);
      } else if (scrollTop <= height && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div
      className={`sticky top-0 z-50 flex justify-between px-5 py-8 transition-all ${
        scrolled ? "bg-background/90 backdrop-blur" : "bg-transparent"
      }`}
      style={{
        transitionDuration: ".15s",
        transitionProperty: "background-color",
        transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
      }}
      ref={headBarRef}
    >
      <motion.h1
        className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl cursor-pointer"
        onClick={handleLogoClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Bailamos
      </motion.h1>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-2 items-center">
        <div className="flex">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => navigate("/organizer")}>
            Organizer
          </Button>
        </div>
        <LocationSelection />
        <ModeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden gap-2 items-center">
        <LocationSelection />
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => navigate("/")}>
              Home
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/organizer")}>
              Organizer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HeadBar;
