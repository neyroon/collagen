import { Button } from "@foundation";
import { FunctionalComponent } from "preact";

interface BannerBuyProps {
  imageLink: string;
}

export const BannerBuy: FunctionalComponent<BannerBuyProps> = ({
  imageLink,
}) => {
  return (
    <div className="bg-anti-flash-white-2 h-[422px] lg:h-[360px] rounded-[28px] lg:rounded-[40px] flex flex-col lg:flex-row">
      <img
        className="object-cover h-[220px] lg:h-[100%] rounded-[28px] lg:rounded-[40px] lg:object-top w-[100%] lg:w-[563px] scale-x-[-1]"
        src={imageLink}
        alt="Изображение товара"
        loading="lazy"
      />
      <div className="flex flex-col items-center lg:items-start my-auto lg:max-w-[535px] py-[24px] px-[15px] lg:p-0">
        <span className="font-halvar font-extrabold text-[22px]/[28px] lg:text-[48px]/[54px] mb-[4px] lg:mb-[10px] uppercase">
          УТП для юзера
        </span>
        <span className=" text-[14px]/[20px] lg:text-[18px]/[28px] mb-[22px] lg:mb-[35px] text-raisin-black text-center lg:text-left">
          Описание желательно использовать в минимальном кол-ве. Двух строк для
          этой цели достаточно
        </span>
        <Button />
      </div>
    </div>
  );
};
