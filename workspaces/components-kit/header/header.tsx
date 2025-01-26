import { Logotype } from "@foundation";
import classNames from "classnames";
import { useEffect, useState } from "preact/hooks";

export const Header = () => {
  const navigationItems = [
    { text: "Новинки", link: "#novelty" },
    { text: "Хиты", link: "#hits" },
    { text: "Для лица", link: "#for-face" },
    { text: "Для бровей", link: "#for-eyebrows" },
    { text: "Для губ", link: "#for-lips" },
    { text: "Для тела", link: "#hits" },
    { text: "Для дома", link: "#hits" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <>
      <header className=" bg-white fixed w-[100%] border-b border-gray z-20">
        <div className="px-[15px] lg:px-[20px] xl:px-[100px] xl-1392:px-[140px] 2xl:px-[210px] 2xl-1632:px-[288px]">
          <div className="flex justify-between items-center  lg:py-[20px] py-[16px] ">
            <a href="/" className="cursor-pointer">
              <Logotype />
            </a>
            <nav className="hidden lg:block font-medium text-[14px]/[20px] ">
              <ul className="flex gap-[32px]  ">
                {navigationItems.map(({ text, link }) => (
                  <li className="cursor-pointer hover:text-rocket-metallic transition-colors duration-300">
                    <a href={link}>{text}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              id="toggleMenu"
              onClick={handleMenuButtonClick}
              className={classNames(
                "grid lg:hidden place-content-center w-[24px] h-[16px]",
                { "hamburger-toggle": isOpen }
              )}
            >
              <div className="w-[24px] h-[3px] bg-black-olive rounded-full transition-all duration-300 before:content-[''] before:absolute before:w-[24px] before:h-[3px] before:bg-black-olive before:rounded-full before:-translate-y-[6px] before:transition-all before:duration-300 after:content-[''] after:absolute after:w-[24px] after:h-[3px] after:bg-black-olive after:rounded-full after:translate-y-[6px] after:transition-all after:duration-300"></div>
            </div>
          </div>
        </div>
      </header>
      <aside
        className={classNames(
          {
            "translate-y-[0]": isOpen,
            "translate-y-[-100%]": !isOpen,
          },
          " bg-wheal fixed top-0 left-0 bottom-0 right-0 w-[100vw]  h-[100dvh] ios-full-height z-10  transition-transform duration-300 supports-[-webkit-touch-callout: none]:h-[webkit-fill-available]"
        )}
      >
        <div className="mt-[80px] lg:mt-[100px] h-[calc(100%-85px)] overflow-y-scroll ">
          <nav className=" px-[15px] font-medium text-[14px]/[20px] rounded-[20px]">
            <ul className="bg-white  p-[12px] flex flex-col rounded-[20px]">
              {navigationItems.map(({ text, link }) => (
                <li
                  className="px-[16px] py-[12px]"
                  onClick={handleNavLinkClick}
                >
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
