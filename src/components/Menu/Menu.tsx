"use client";

import { useEffect, useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
import links from "@/lib/links";
import Link from "next/link";

const Menu = () => {
  const { isOpen, toggle } = useContext(MenuContext);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <div
      id="mobileMenu"
      className="flex justify-center items-center fixed z-20 w-[100vw] h-[100vh] top-0 left-0 translate-x-full transition-transform
      bg-gradient-to-t from-[#010a05]/90  to-[#010a05]/90"
    >
      <button
        className="absolute top-[100px] right-[100px] text-[14px] tracking-[.1em]"
        onClick={toggle}
      >
        CLOSE
      </button>

      {false &&
        "w-[179px] ml-auto mb-[36px] text-[14px] leading-[20px] font-extralight | min-[768px]:w-[222px] min-[768px]:mb-[18px] min-[768px]:ml-0 min-[768px]:mt-[98px] | min-[1280px]:mt-0 min-[1280px]:text-[18px] min-[1280px]:leading-[24px] min-[1280px]:w-[234px]"}

      <nav className="flex flex-col justify-between items-center h-[300px]">
        {links.map((link) => (
          <Link
            className="tracking-[.1em] text-[18px] font-normal hover:underline"
            key={link.id}
            href={link.url}
            onClick={toggle}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
