import Container from "../Container/Container";

const About = () => {
  return (
    <section
      className="py-[56px] max-w-[1440px] ml-auto mr-auto min-w-[320px] relative
      | min-[768px]:py-[64px]
      | min-[1280px]:py-[104px]"
      id="about"
    >
      <div
        className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-t from-[#001826]/50 to-transparent
      | min-[1280px]:w-full min-[1280px]:h-1/3
      "
      />
      <Container>
        <div
          className="
        | min-[768px]:flex"
        >
          <h3
            className="text-[40px] leading-[56px] font-thin mb-[12px]
            | min-[768px]:text-[67px] min-[768px]:leading-[82px] min-[768px]:tracking-[-.04em] min-[768px]:mb-0 min-[768px]:mr-auto
            | min-[1280px]:text-[98px] min-[1280px]:leading-[118px] min-[1280px]:mr-[48px]"
          >
            WHO <span className="font-medium">WE ARE </span>
          </h3>
          <div
            className="w-[180px] p-0 text-[14px] leading-[20px]
          | min-[768px]:w-[220px] min-[768px]:text-[16px]
          | min-[1280px]:mt-[40px] min-[1280px]:w-[292px] min-[1280px]:text-[18px] min-[1280px]:leading-[24px]"
          >
            <p className="mb-[24px]">
              a team of enthusiasts{" "}
              <span className="font-extralight">
                who are fully committed to the mission of creating unforgettable
                and extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </span>
            </p>
            <p>
              We believe{" "}
              <span className="font-extralight">
                that nature has the power to inspire, strengthen character and
                provide new perspectives. Therefore, each of our tours is aimed
                at unlocking your potential, enriching your spiritual world and
                creating unforgettable memories.
              </span>
            </p>
          </div>
        </div>

        <div
          className="mt-[32px] font-extralight text-[14px] leading-[20px]
          | min-[768px]:text-[16px] min-[768px]:mt-[60px] min-[768px]:w-[463px] min-[768px]:ml-auto min-[768px]:relative
          | min-[1280px]:flex min-[1280px]:flex-row-reverse min-[1280px]:w-full min-[1280px]:text-[18px] min-[1280px]:leading-[24px]"
        >
          <h4
            className="w-[180px] ml-auto flex flex-col
          | min-[768px]:w-[221px] min-[768px]:absolute min-[768px]:top-[-120px] min-[768px]:left-[-240px] 
          | min-[1280px]:static min-[1280px]:w-[296px]"
          >
            <span className="font-normal uppercase">From vacationers</span>{" "}
            <span className="font-normal uppercase ml-auto">
              to active travelers
            </span>
            <span
              className="tracking-[-.01em]
            | min-[768px]:tracking-[.024em]
            | min-[1280px]:tracking-[.118em]"
            >
              we have a tour for everyone.
            </span>
          </h4>
          <p
            className="mt-[32px]
          | min-[1280px]:w-[605px] min-[1280px]:mt-0"
          >
            <span className="font-normal">We use methods </span>
            <span>
              that are time-tested and proven. Our expert guides with in-depth
              knowledge of the Carpathian landscapes lead you safely through the
              mysteries of these mountains.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
