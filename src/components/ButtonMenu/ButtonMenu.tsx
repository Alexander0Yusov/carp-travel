"use client";
import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

const ButtonMenu = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useContext(MenuContext);

  return (
    <button
      id="buttonMenuOpen"
      className="tracking-[.1em]"
      aria-expanded="false"
      aria-controls="mobile-menu"
      onClick={toggle}
    >
      {children}
    </button>
  );
};

export default ButtonMenu;
