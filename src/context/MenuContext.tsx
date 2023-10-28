"use client";

import { createContext, useState } from "react";

type MenuContextType = {
  isOpen: boolean;
  toggle: () => void;
};

export const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggle: () => {},
});

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    const mobileMenu = document.querySelector("#mobileMenu");
    const openMenuBtn = document.querySelector("#buttonMenuOpen");

    const isMenuOpen =
      openMenuBtn?.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn?.setAttribute("aria-expanded", `${!isMenuOpen}`);
    mobileMenu?.classList.toggle("is-open");

    setIsOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ toggle, isOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
