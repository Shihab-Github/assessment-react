import Link from "next/link";
import { Input } from "@/components/ui/input";
import NavItem from "@/components/molecules/NavItem";

export default function Navbar() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col sm:none">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <NavItem
              title={"AEON"}
              classNames={"font-semibold md:text-base text-lg mr-4"}
            />
            <NavItem title={"Dashboard"} />
            <NavItem title={"Orders"} />
            <NavItem title={"Products"} />
            <NavItem title={"Customers"} />
            <NavItem title={"Settings"} />
          </nav>

          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
        </header>
      </div>
    </>
  );
}
