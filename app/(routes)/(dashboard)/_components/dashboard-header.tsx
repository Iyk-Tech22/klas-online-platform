"use client";

import React from "react";
import { Icons } from "../../../../components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserAvatar from "./dashboard-avatar";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const DashboardHeader = () => {

  const { data: userSession } = useSession();

  const user = userSession?.user

  const pathname = usePathname();

  const createContent = pathname.match("/dashboard/create");

  return (
    <div className="max-md:hidden">
      {!createContent ? (
        <div className="md:px-10 md:pt-10">
          <div className="flex mb-10 items-center justify-between">
            <Link href="/">
              <Icons.logo_dashboard className="" />
            </Link>
            <span className="flex items-center space-x-4">
              <Link href="/dashboard/create">
                <Button className="px-9 py-6 rounded-[8px] btn-gradient font-bold">
                  Create a content
                </Button>
              </Link>
              <UserAvatar imageUrl={user?.image} />
            </span>
          </div>
        </div>
      ) : (
        <div className={`${pathname.startsWith('/dashboard/create/') ? "hidden" : ""} mx-5 md:px-10 md:pt-10`}>
          <Link className="flex max-md:mt-4 items-center md:gap-[10px] font-bold text-xl text-brand-blue-200" href="/dashboard">
            <Icons.back_icon />
            Back
          </Link>
          <div className="mt-[30px] mb-4 md:mb-10 border border-gray-50"/>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
