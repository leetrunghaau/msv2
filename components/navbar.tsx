"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { cn, link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  SearchIcon,
  Logo,
} from "@/components/icons";
import MUser from './user';
import { Icon } from "@iconify/react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { Button } from "@heroui/button";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );



  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent>
        {/* Toggle icon */}
        <NavbarItem className="lg:hidden">
          <NavbarMenuToggle />
        </NavbarItem>

        {/* Brand */}
        <NavbarItem>
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="hidden md:flex font-bold text-inherit">MATH SOLVER VN</p>
          </NextLink>
        </NavbarItem>

        {/* Nav items */}
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-secondary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Search Input (Make it take full width) */}
      <NavbarContent className="hidden lg:flex flex-grow">
        {searchInput}
      </NavbarContent>

      <NavbarContent justify="end" >
        <NavbarItem className={cn("hidden md:flex gap-4")}>
          <MUser fullInfo />
        </NavbarItem>
        <NavbarItem className={cn("md:hidden gap-4")} >
          <MUser />
        </NavbarItem>
        <NavbarItem>
          <NextLink href={"/order/cart"}>
            <Icon className="text-default-500 align-middle mb-2" icon="uil:cart" width={25} aria-label="Previous Page" />
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "secondary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
