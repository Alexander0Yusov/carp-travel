import Container from "../Container/Container";
import ButtonHero from "../ButtonHero/ButtonHero";

const Hero = () => {
  return (
    <section
      className="flex flex-col relative ml-auto mr-auto pt-[112px] min-w-[320px] max-w-[1440px] h-[642px] |
      | min-[320px]:w-full |
      | min-[768px]:h-[531px] |
      | min-[1280px]:h-[763px] min-[1280px]:pt-[160px]"
      id="hero"
    >
      <Container>
        <div
          id={"uncover__block"}
          className="absolute top-[190px]
          | min-[768px]:top-[104px]
          | min-[1280px]:top-[160px]"
        >
          <h1
            className="flex flex-col text-[40px] leading-[56px] font-thin
          | min-[768px]:text-[67px] min-[768px]:leading-[82px]
          | min-[1280px]:text-[98px] min-[1280px]:leading-[118px]"
          >
            <span className="font-medium">Uncover</span>
            <span>Carpathian's</span>
            <span>Secrets</span>
          </h1>
          <h2
            className="mt-[20px] font-extralight text-[10px] leading-[16px]
          | min-[768px]:text-[14px] min-[768px]:mt-[76px]
          | min-[1280px]:text-[16px] min-[1280px]:leading-[24px] min-[1280px]:mt-[144px]"
          >
            Hoverla / Yaremche / Zakarpattia /
            <br className="| min-[1280px]:hidden" />
            Vorokhta / Synevyr Lake / Bukovel
          </h2>
        </div>

        <div
          id={"7days__block"}
          className="flex flex-col h-[480px]
          | min-[768px]:h-[345px] min-[768px]:w-[230px] min-[768px]:ml-auto
          | min-[1280px]:h-[520px] min-[1280px]:w-[300px]"
        >
          <h2
            className="w-[113px] mb-auto ml-auto
          | min-[768px]:ml-0 min-[768px]:w-full"
          >
            <span
              className="flex justify-between text-[37px] leading-[37px]
            | min-[768px]:text-[67px] min-[768px]:leading-[67px]
            | min-[1280px]:text-[98px] min-[1280px]:leading-[118px]"
            >
              <span className=" font-medium">7</span>
              <span className=" font-thin">DAYS</span>
            </span>

            <span
              className="flex justify-between font-light text-[12px] leading-[14px]
            | min-[768px]:text-[14px] min-[768px]:leading-[17px]
            | min-[1280px]:text-[16px] min-[1280px]:leading-[19px]"
            >
              <span>J</span>
              <span>O</span>
              <span>U</span>
              <span>R</span>
              <span>N</span>
              <span>E</span>
              <span>Y</span>
            </span>
          </h2>

          <h3
            className="mb-[35px] text-justify text-[14px] leading-[20px]
          | min-[768px]:text-[16px] min-[768px]:leading-[20px]
          | min-[1280px]:text-[18px] min-[1280px]:leading-[24px]"
          >
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </h3>
          <ButtonHero />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
