import Container from "../Container/Container";
import FormCareer from "../FormCareer/FormCareer";

const ChooseUs = () => {
  return (
    <section>
      <div
        className="min-w-[320px] max-w-[1440px] ml-auto mr-auto py-[56px] h-[800px]
      | min-[768px]:py-[64px] min-[768px]:h-[720px]
      | min-[1280px]:py-[80px] min-[1280px]:h-[818px]"
        id="career"
      >
        <Container>
          <div
            className="flex flex-col mb-[20px]
      | min-[768px]:flex-row  min-[768px]:mb-0
      | min-[1280px]: min-[1280px]:"
          >
            <h3
              className="text-[40px] leading-[56px] font-thin mb-[12px]
            | min-[768px]:text-[67px] min-[768px]:leading-[82px] min-[768px]:tracking-[-.04em] min-[768px]:mb-0
            | min-[1280px]:text-[98px] min-[1280px]:leading-[118px] min-[1280px]:pb-[28px]"
            >
              CHOOSE <span className="font-medium">US</span>
            </h3>
            <div
              className="ml-auto w-[179px]
            | min-[768px]:w-[221px]
            | min-[1280px]:w-[293px]"
            >
              <p
                className="text-[14px] leading-[20px] font-extralight text-justify
              | min-[768px]:text-[13px] min-[768px]:mt-[12px]
              | min-[1280px]:text-[18px] min-[1280px]:leading-[24px]"
              >
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.
              </p>
              <h4
                className="text-[30px] leading-[36px] font-extralight mt-[32px]
              | min-[768px]:hidden min-[768px]: min-[768px]:"
              >
                Why us ?
              </h4>
            </div>
          </div>

          <div className="flex">
            <div
              className="w-[181px]
              | min-[768px]:w-[222px] min-[768px]:mr-[19px] min-[768px]:text-right
              | min-[1280px]:mr-[334px] min-[1280px]:w-[292px]"
            >
              <h4
                className="hidden text-[30px] leading-[36px] font-extralight mb-[32px]
            | min-[768px]:block min-[768px]:mb-[60px]
            | min-[1280px]:text-[36px] min-[1280px]:leading-[39px] min-[1280px]:mb-[44px]"
              >
                Why us ?
              </h4>
              <div
                className=" text-[12px] leading-[20px] font-extralight
              | min-[1280px]:leading-[24px]"
              >
                <p
                  className="flex flex-col mb-[16px]
                  | min-[768px]:mb-[24px]
                  | min-[1280px]:relative min-[1280px]:mb-[54px]"
                >
                  <span
                    className="text-[14px] font-normal mb-[8px]
                | min-[768px]:text-[16px]
                | min-[1280px]:text-[18px]"
                  >
                    Professional development
                  </span>
                  <span className="min-[1280px]:absolute min-[1280px]:right-[-312px] min-[1280px]:w-[285px] min-[1280px]:text-left">
                    We offer growth opportunities and a creative environment to
                    nurture your talents.
                  </span>
                </p>
                <p
                  className="flex flex-col mb-[16px]
              | min-[768px]:mb-[24px]
              | min-[1280px]:relative min-[1280px]:mb-[54px]"
                >
                  <span
                    className="text-[14px] font-normal mb-[8px]
                | min-[768px]:text-[16px]
                | min-[1280px]:text-[18px]"
                  >
                    Teamwork
                  </span>
                  <span className="min-[1280px]:absolute min-[1280px]:right-[-312px] min-[1280px]:w-[285px] min-[1280px]:text-left">
                    Join our close-knit family, where support and inspiration
                    abound.
                  </span>
                </p>
                <p
                  className="flex flex-col mb-[16px]
              | min-[768px]:mb-[24px]
              | min-[1280px]:relative min-[1280px]:mb-[54px]"
                >
                  <span
                    className="text-[14px] font-normal mb-[8px]
                | min-[768px]:text-[16px] min-[768px]:tracking-[-.04em]
                | min-[1280px]:text-[18px]"
                  >
                    Stimulating work environment
                  </span>
                  <span className="min-[1280px]:absolute min-[1280px]:right-[-312px] min-[1280px]:w-[285px] min-[1280px]:text-left">
                    Flexibility and remote options for a comfortable experience.
                  </span>
                </p>
                <p
                  className="flex flex-col
                | min-[1280px]:relative min-[1280px]:mb-[54px]"
                >
                  <span
                    className="text-[14px] font-normal mb-[8px]
                | min-[768px]:text-[16px]
                | min-[1280px]:text-[18px]"
                  >
                    Exciting challenges
                  </span>
                  <span className="min-[1280px]:absolute min-[1280px]:right-[-312px] min-[1280px]:w-[285px] min-[1280px]:text-left">
                    Unleash your potential through unforgettable projects
                    showcasing Carpathian beauty.
                  </span>
                </p>
              </div>
            </div>

            <div
              className="hidden h-[490px]
              | min-[768px]:block min-[768px]:w-[463px]
              | min-[1280px]:w-[606px]"
            >
              <FormCareer />
            </div>
          </div>
        </Container>
      </div>
      <div
        className="min-w-[320px] max-w-[1440px] ml-auto mr-auto py-[56px] h-[800px]
      | min-[768px]:hidden"
        id="career_form"
      >
        <Container>
          <FormCareer />
        </Container>
      </div>
    </section>
  );
};

export default ChooseUs;
