import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="flex justify-center items-center absolute z-10 w-full">
      <div
        className="flex items-center justify-between  min-w-[320px] h-[90px] px-[20px]    
      | min-[480px]:w-[480px] 
      | min-[768px]:w-[768px] min-[768px]:px-[32px]
      | min-[1280px]:w-[1280px] min-[1280px]:px-[24px]"
      >
        <Logo />

        <div className="| max-[767px]:hidden">
          <Navbar />
        </div>

        <div className="| min-[768px]:hidden">
          <ButtonMenu>MENU</ButtonMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
