import AuthCarousel from "@/app/(routes)/(auth)/_components/auth-carousel";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Klas: Welcome",
    template: "Klas: %s",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex justify-center items-start overflow-hidden">
      <div className="w-2/4 max-md-920:hidden">
        <AuthCarousel />
      </div>
      <div className="md-920:w-2/4 overflow-y-scroll no-scrollbar md-920:h-screen">{children}</div>
    </div>
  );
}
