"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import NavItem from "@/components/molecules/NavItem";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggle = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      <div className="md:flex min-h-screen w-full md:flex-col">
        <header className="max-[768px]:hidden md:flex md:sticky md:top-0 h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <NavItem
              title={"AEON"}
              classNames={"font-semibold md:text-base text-lg mr-4"}
            />
            <NavItem title={"Dashboard"} />
            <NavItem title={"Orders"} />
            <NavItem title={"Products"} />
            <NavItem title={"Customers"} />
            <NavItem title={"Settings"} classNames={"grow"} />

            <div>
              <Input type="search" placeholder="Search products..." />
            </div>
          </nav>
        </header>

        {isCollapsed && (
          <nav className="w-full md:hidden bg-transparent p-4">
            <MenuIcon
              role="button"
              onClick={toggle}
              className="h-6 w-6 text-muted-foreground"
            />
          </nav>
        )}
        {!isCollapsed && (
          <div className="md:hidden border bg-slate-50 h-screen w-[360px] ">
            <div className="flex items-center border-b p-4 justify-between">
              <div>AEON</div>
              <div>
                <MenuIcon
                  role="button"
                  onClick={toggle}
                  className="h-6 w-6 text-muted-foreground"
                />
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <NavItem title={"Dashboard"} />
              <NavItem title={"Orders"} />
              <NavItem title={"Products"} />
              <NavItem title={"Customers"} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
