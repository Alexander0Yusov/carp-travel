import Image from "next/image";
import Link from "next/link";

const ButtonHero = () => {
  return (
    <Link
      href="#contacts"
      className="flex justify-between bg-white/10 hover:bg-white/20 w-full h-[53px]
    | min-[768px]:h-[50px]  
    | min-[1280px]:h-[71px]"
    >
      <Image
        src="/btn_left_fragment.svg"
        alt="corner decorations"
        style={{
          width: "auto",
          height: "100%",
        }}
        width={0}
        height={0}
      />
      <p
        className="text-[18px] leading-[48px] font-bold self-center          
         | min-[1280px]:text-[32px] min-[1280px]:leading-[40px]"
      >
        JOIN NOW
      </p>

      <Image
        src="/btn_right_fragment.svg"
        alt="corner decorations"
        style={{
          width: "auto",
          height: "100%",
        }}
        width={0}
        height={0}
      />
    </Link>
  );
};

export default ButtonHero;
