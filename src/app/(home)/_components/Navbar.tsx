import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="flex items-center justify-between py-4">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <nav>
        <ul className="hidden lg:flex items-center gap-x-16">
          {["Destinations", "Hotels", "Flights", "Bookings", "Login"].map(
            (item) => (
              <Link href="#" key={item} className="text-base">
                {item}
              </Link>
            )
          )}
          <Link href="#" className="border border-black py-2 px-4 rounded-md">
            Sign up
          </Link>
          <li className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-x-1">
                EN <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <ul className="flex flex-col gap-y-3">
                  {["IDN", "JPN", "KOR", "RUS"].map((item) => (
                    <DropdownMenuItem key={item}>
                      <Link href="#" className="text-base">
                        {item}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </ul>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
        <MobileNavbar />
      </nav>
    </header>
  );
};

export default Navbar;
