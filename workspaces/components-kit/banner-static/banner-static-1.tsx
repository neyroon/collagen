import { FunctionalComponent } from "preact";

interface BannerStatic {
  imageLink: string;
}

export const BannerStatic1: FunctionalComponent<BannerStatic> = ({
  imageLink,
}) => {
  return (
    <div className="bg-anti-flash-white-2 h-[220px] lg:h-[380px] rounded-[28px] lg:rounded-[40px] relative overflow-hidden">
      <img
        className="object-cover h-[100%] rounded-[28px] lg:rounded-[40px] w-[100%] scale-[3.5] lg:scale-[2] absolute top-[60%] lg:top-[60px] 2xl-1632:top-[5%] left-[20%] lg:left-[15%] object-center"
        src={imageLink}
        alt="Изображение девушки"
        loading="lazy"
      />
    </div>
  );
};
