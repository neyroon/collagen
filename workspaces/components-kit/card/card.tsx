import { OzonLogo, WbLogo } from "@foundation";
import classNames from "classnames";
import { FunctionalComponent } from "preact";

interface CardProps {
  imageLink: string;
  title: string;
  description: string;
  price: string;
  isNew?: boolean;
  isHit?: boolean;
  wbLink?: string;
  ozonLink?: string;
  imagePosition?: "top" | "bottom";
}

export const Card: FunctionalComponent<CardProps> = ({
  imageLink,
  title,
  isNew,
  isHit,
  description,
  imagePosition,
  wbLink = "/",
  ozonLink = "/",
  price,
}) => {
  const descriptionWithBr = description.split("<br>").map((text) => (
    <>
      {text}
      <br></br>
    </>
  ));
  return (
    <div className="flex flex-col gap-[10px] lg:gap-[26px] relative w-[calc(50%-8px)] lg:w-[calc(33.3%-40px)]">
      {(isNew || isHit) && (
        <span
          className={classNames(
            "absolute top-0 left-0 font-halvar font-medium text-[11px]/[13px] lg:text-[14px]/[16px]  px-[8px] py-[6px] lg:py-[9px] flex justify-center items-center rounded-tl-[16px]  rounded-br-[8px] lg:rounded-br-[16px]",
            {
              "bg-vivid-raspberry text-white": isNew,
              "bg-yellow text-raisin-black": isHit,
            }
          )}
        >
          {isNew ? "NEW" : "ХИТЫ"}
        </span>
      )}
      <img
        src={imageLink}
        alt="Изображение товара"
        className={classNames(
          "h-[148px] lg:h-[350px] object-cover rounded-[16px]",
          {
            "object-top": imagePosition === "top",
            "object-bottom": imagePosition === "bottom",
          }
        )}
        loading="lazy"
      />
      <div className="flex flex-col">
        <span className="font-halvar font-extrabold lg:font-bold text-[14px]/[20px] lg:text-[24px]/[28px] text-raisin-black mb-[6px] lg:mb-[16px]">
          {title}
        </span>
        <span
          className={classNames(
            "text-[11px]/[14px] lg:text-[16px]/[24px] opacity-[70%] tracking-[5%] text-raisin-black mb-[6px] ",
            { "lg:mb-[24px]": isNew, "lg:mb-[20px]": !isNew }
          )}
        >
          {descriptionWithBr}
        </span>
        <span
          className={classNames(
            "text-[18px]/[27px] lg:text-[24px]/[28px] font-halvar font-bold text-raisin-black mb-[8px] ",
            { "lg:mb-[24px]": isNew, "lg:mb-[20px]": !isNew }
          )}
        >
          {price}
        </span>
        <div className="flex flex-col lg:flex-row gap-[8px] lg:gap-[16px]">
          <a
            href={wbLink}
            className="flex justify-center items-center w-[100%] lg:w-[calc(50%-8px)] py-[13px] lg:py-[14px] bg-transparent border-anti-flash-white border-2 cursor-pointer text-wb hover:bg-wb hover:text-white active:bg-wb-active hover:border-wb active:border-wb-active active:text-white rounded-[8px] transition-colors duration-[400ms]"
          >
            <WbLogo />
          </a>
          <a
            href={ozonLink}
            className="flex justify-center items-center w-[100%] lg:w-[calc(50%-8px)] py-[13px] lg:py-[14px] bg-transparent border-anti-flash-white border-2 cursor-pointer text-ozon hover:bg-ozon hover:text-white active:bg-ozon-active hover:border-ozon active:border-ozon-active active:text-white rounded-[8px] transition-colors duration-[400ms]"
          >
            <OzonLogo />
          </a>
        </div>
      </div>
    </div>
  );
};
