"use client";

import * as React from "react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/glasses" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className:
                  "hover:bg-transparent hover:border-black hover:font-semibold border-b-2 border-transparent rounded-none",
              })}
            >
              Glasses
            </NavigationMenuLink>
          </Link>
          <Link href="/sunglasses" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className:
                  "hover:bg-transparent hover:border-black hover:font-semibold border-b-2 border-transparent rounded-none",
              })}
            >
              Sunglasses
            </NavigationMenuLink>
          </Link>
          <Link href="/contactlences" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className:
                  "hover:bg-transparent hover:border-black hover:font-semibold border-b-2 border-transparent rounded-none",
              })}
            >
              Contact Lenses
            </NavigationMenuLink>
          </Link>
          <Link href="/contactlences" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className:
                  "hover:bg-transparent hover:border-black hover:font-semibold border-b-2 border-transparent rounded-none",
              })}
            >
              Home Try-On
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
