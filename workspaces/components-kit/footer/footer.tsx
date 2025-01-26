import { LogoText } from "@foundation";

export const Footer = () => {
  const navigationItems = [
    { text: "Новинки", link: "#novelty" },
    { text: "Хиты", link: "#hits" },
    { text: "Для лица", link: "#for-face" },
    { text: "Для бровей", link: "#for-eyebrows" },
    { text: "Для губ", link: "#for-lips" },
    { text: "Для тела", link: "#hits" },
    { text: "Для дома", link: "#hits" },
  ];

  const bottomItems = [
    { text: "Политика конфиденциальности", link: "/" },
    { text: "Публичная оферта", link: "/" },
    { text: "Пользовательское соглашение", link: "/" },
    { text: "Обработка данных", link: "/" },
  ];

  return (
    <footer className="bg-lotion w-[100%] border-t border-gray  pt-[40px] pb-[24px] lg:py-[40px] mt-[60px] lg:mt-[-40px]">
      <div className="px-[15px] lg:px-[20px] xl:px-[100px] xl-1392:px-[140px] 2xl:px-[210px] 2xl-1632:px-[288px]">
        <div className="border-b-[1px] border-gray mb-[20px] lg:mb-[96px]">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <LogoText />
            <div className="block lg:hidden lg:w-[225px] mb-[22px] text-[11px]/[14px] lg:text-[14px]/[20px] text-raisin-black opacity-[70%] text-center lg:text-left mt-[12px]">
              Небольшое описание <br></br>про деятельность компании <br></br>
              Лучше&nbsp;сделать в 2 или 3 строках
            </div>
            <nav className="font-medium text-[14px]/[20px] mb-[20px] lg:mb-0">
              <ul className="flex flex-col lg:flex-row gap-[10px] lg:gap-[40px] items-center ">
                {navigationItems.map(({ text, link }) => (
                  <li className="cursor-pointer hover:text-rocket-metallic transition-colors duration-300">
                    <a href={link}>{text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden lg:block lg:w-[225px] my-[32px] text-[14px]/[20px] text-raisin-black opacity-[70%]">
            Небольшое описание про деятельность компании Лучше&nbsp;сделать в 2
            или 3 строках
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <ul className="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px] items-center">
            {bottomItems.map(({ text, link }) => (
              <li className="cursor-pointer text-[13px]/[18px] hover:text-rocket-metallic transition-colors duration-300">
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
          <span className="text-[14px]/[20px] font-medium uppercase mt-[32px] lg:mt-0">
            © 2025 Beautycol
          </span>
        </div>
      </div>
    </footer>
  );
};
