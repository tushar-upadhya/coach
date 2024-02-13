"use client";

import { routes } from "@/utils";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="justify-between flex-row items-center bg-black text-white flex p-4">
      {/* logo */}

      <Link href={"/"} className="text-2xl font-bold">
        <h1>AI Gym Coach</h1>
      </Link>

      <div className="flex gap-x-6 text-lg items-center">
        {routes.map((route, index) => {
          return (
            <Link
              href={route.name}
              key={index}
              className={
                pathname === route.path ? "border-b-2 border-yellow-200" : ""
              }
            >
              {route.name}
            </Link>
          );
        })}

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
