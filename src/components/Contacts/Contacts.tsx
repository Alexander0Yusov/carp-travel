import Link from "next/link";

import { Inter } from "next/font/google";
import FormContacts from "../FormContacts/FormContacts";
import Container from "../Container/Container";

const inter = Inter({ subsets: ["latin"] });

const Contacts = () => {
  return (
    <section
      className="min-w-[320px] max-w-[1440px] ml-auto mr-auto py-[56px] h-[856px]
      | min-[768px]:py-[64px] min-[768px]:h-[720px]
      | min-[1280px]:py-[80px] min-[1280px]:h-[818px]"
      id="contacts"
    >
      <Container>
        <h3
          className="text-[40px] leading-[56px] font-thin mb-[28px]
            | min-[768px]:text-[67px] min-[768px]:leading-[82px] min-[768px]:tracking-[-.04em] min-[768px]:mb-[20px]
            | min-[1280px]:text-[98px] min-[1280px]:leading-[118px] min-[1280px]:mb-[92px] min-[1280px]:mt-[24px] min-[1280px]:ml-[24px]"
        >
          CONTACT <span className="font-medium">US</span>
        </h3>

        <div
          className="
          | min-[1280px]:flex min-[1280px]:justify-between"
        >
          <address className={inter.className}>
            <div
              className="
              | min-[768px]:flex min-[768px]:mb-[68px]
              | min-[1280px]:flex-col min-[1280px]:mb-0 min-[1280px]:ml-[108px]"
            >
              <div
                className="
              |  min-[768px]:mr-[60px]
              | min-[1280px]:mr-0 min-[1280px]:mb-[120px]"
              >
                <div
                  className="flex justify-end mb-[32px]
                  | min-[1280px]:mb-[50px]"
                >
                  <ul
                    className=" text-[14px] leading-[20px] font-normal
                  | min-[768px]:text-right min-[768px]:text-[16px] min-[768px]:leading-[24px]
                  | min-[1280px]:text-[18px]"
                  >
                    <li
                      className="mb-[4px]
                      | min-[768px]:w-[221px]"
                    >
                      <Link
                        className="hover:underline"
                        href={"tel:+380981234567"}
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                      >
                        +38 (098) 12 34 567
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:underline"
                        href={"tel:+380981234567"}
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                      >
                        +38 (098) 12 34 567
                      </Link>
                    </li>
                  </ul>
                  <p className="w-[82px] ml-[20px] text-[12px] leading-[20px] font-extralight">
                    Phone number
                  </p>
                </div>

                <div
                  className="flex justify-end mb-[32px]
                | min-[768px]:mb-0"
                >
                  <Link
                    className=" text-[14px] leading-[20px] font-normal hover:underline
                    | min-[768px]:w-[221px] min-[768px]:text-right min-[768px]:text-[16px] min-[768px]:leading-[24px]
                    | min-[1280px]:text-[18px]"
                    href={"email:+380981234567"}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    support@carptravel.com
                  </Link>
                  <p className="w-[82px] ml-[20px] text-[12px] leading-[20px] font-extralight">
                    E-mail
                  </p>
                </div>
              </div>

              <div
                className="flex justify-end
                | min-[1280px]:flex-row-reverse"
              >
                <p className="text-[12px] leading-[20px] font-extralight">
                  Follow us
                </p>
                <ul
                  className="w-[82px] ml-[20px] text-[14px] leading-[20px] font-normal
                | min-[768px]:text-[16px] min-[768px]:leading-[24px]
                | min-[1280px]:text-[18px] min-[1280px]:ml-0 min-[1280px]:w-[221px] min-[1280px]:text-right min-[1280px]:mr-[20px]"
                >
                  <li className="mb-[4px]">
                    <Link
                      className="hover:underline"
                      href={"https://www.facebook.com"}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      facebook
                    </Link>
                  </li>
                  <li className="mb-[4px]">
                    <Link
                      className="hover:underline"
                      href={"https://www.instagram.com"}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      instagram
                    </Link>
                  </li>
                  <li className="mb-[4px]">
                    <Link
                      className="hover:underline"
                      href={"https://www.youtube.com"}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      youtube
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline"
                      href={"https://www.tiktok.com"}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      tiktok
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </address>

          <FormContacts />
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
