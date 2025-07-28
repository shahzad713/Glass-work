

import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import {
  DesktopNavbarProps,
  NavItemContainerProps,
  NavbarProps,
} from "./types";

import { AppBar, IconButton, Toolbar } from "@mui/material";

import styles from "./style.module.css";

export const menuClick = (link: any) => {
  // Remove the .then() chain to make navigation faster
  Router.push(link);
  // The scroll will reset automatically on page change
};

export const NavItemContainer = ({
  navItems,
  router,
}: NavItemContainerProps) => {
  return (
    <div className={styles.navItemContainer}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          prefetch={true}
          className={`${styles.navItem} no-underline hover:no-underline`}
          onClick={(e) => {
            if (item.name === "Call us") {
              e.preventDefault();
              window.open("tel:+923020999713");
            }
            // For other links, let Next.js Link handle the navigation
          }}
        >
          {item.name === "Call us" ? (
            <div className="flex">
              <div className="normal-case xl:uppercase font-normal hover-underline-animation">
                {item.name}
              </div>

              <CallIcon
                sx={{
                  fontSize: 30,
                  marginLeft: "5px",
                  color: "#10146F",
                  marginTop: "-3px",
                }}
              />
            </div>
          ) : (
            <div className="normal-case xl:uppercase hover-underline-animation">
              {item.name}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export const DesktopNavbar = ({
  navItems,
  router,
  handleDrawerToggle,
  bgWhite,
}: DesktopNavbarProps) => {
  return (
    <AppBar
      component="nav"
      position="fixed"
      className={`${styles.navContainer} ${bgWhite ? styles.bgWhite : ""}`}
    >
      <Toolbar className={styles.insideContainer}>
        <div className={`${styles.logoContainer} cursor-pointer`} onClick={() => router.push('/')}>
          <Image
            className={styles.logo}
            src="/Images/Navbar/logo.jxr"
            alt="ALUM TEC"
            width={200}
            height={68}
            loading="lazy"
            title="ALUM TEC"
          />
        </div>

        <NavItemContainer navItems={navItems} router={router} />

        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={styles.menuButton}
          onClick={handleDrawerToggle}
        > */}
        <div className={styles.menuButton}>
          <Image
            className={styles.phone_logo}
            src="/Images/Navbar/phone_logo.jxr"
            alt="phone"
            title="phone"
            width={17}
            height={20}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <div>
              <MenuIcon className={styles.menuButtonIcon} />
            </div>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar >
  );
};
