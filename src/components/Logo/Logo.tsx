import Image from "next/image";
import Link from "next/link";
import { Karantina } from "next/font/google";

const karantina = Karantina({ subsets: ["latin"], weight: ["400"] });

const Logo = () => {
  return (
    <Link className="flex flex-col w-[61px] tracking-[0.11em] " href="#">
      <Image
        src="/logo.svg"
        alt="corner decorations"
        style={{
          width: "auto",
          height: "100%",
        }}
        width={0}
        height={0}
      />
      <p className={karantina.className}>CarpTravel</p>
    </Link>
  );
};

export default Logo;
