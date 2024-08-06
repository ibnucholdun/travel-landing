import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import React from "react";

type Props = {};

const MobileNavbar = (props: Props) => {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ul className="flex flex-col gap-y-3">
            {["Destinations", "Hotels", "Flights", "Bookings", "Login"].map(
              (item) => (
                <DropdownMenuItem key={item}>
                  <li className="text-base">{item}</li>
                </DropdownMenuItem>
              )
            )}
            <DropdownMenuItem>
              <li className="border border-black py-2 px-4 rounded-md">
                Sign up
              </li>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <li className="flex items-center">
                <span>EN</span> <ChevronDown />
              </li>
            </DropdownMenuItem>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavbar;
