import Link from "next/link";
import links from "@/lib/links";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-[514px]">
      {links.map((link) => (
        <Link
          className="text-[14px] font-normal hover:underline"
          key={link.id}
          href={link.url}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
