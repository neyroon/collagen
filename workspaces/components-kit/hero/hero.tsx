import { Button } from "@foundation";
import { FunctionalComponent } from "preact";

interface HeroProps {
  imageLink: string;
}

export const Hero: FunctionalComponent<HeroProps> = ({ imageLink }) => {
  return (
    <section className="lg:px-[28px] lg:pt-[113px] h-[100%] pt-[64px]">
      <div className="bg-wheal lg:rounded-[40px] h-[560px] lg:h-[680px] rounded-[28px] flex flex-col lg:flex-row xl:gap-[80px] lg:gap-[40px] ">
        <img
          src={imageLink}
          alt="Изображение товара"
          loading="lazy"
          className="block rounded-t-none  lg:h-[100%] h-[280px] lg:w-[50%] lg:rounded-[40px] rounded-[28px] object-cover shrink-0"
        />
        <div className="flex flex-col my-auto lg:max-w-[645px] p-[32px] lg:p-0 items-center lg:items-start xl:w-[calc(50%-80px)] lg:w-[calc(50%-40px)] text-center lg:text-left">
          <div className="bg-vivid-raspberry rounded-[8px] px-[8px] py-[4px] mb-[12px] text-[16px]/[20px] lg:text-[22px]/[28px]  font-halvar uppercase text-white font-bold">
            Новинка
          </div>
          <div className="text-[22px]/[28px] lg:text-[48px]/[54px] mb-[4px] lg:mb-[10px] font-halvar uppercase font-extrabold">
            Заголовок с названием товара
          </div>
          <div className="text-[14px]/[20px] lg:text-[18px]/[28px] mb-[16px] lg:mb-[35px] text-raisin-black">
            Описание желательно использовать в минимальном кол-ве. Двух строк
            для этой цели достаточно
          </div>
          <Button />
        </div>
      </div>
    </section>
  );
};
