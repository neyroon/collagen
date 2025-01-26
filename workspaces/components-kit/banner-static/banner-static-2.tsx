import { FunctionalComponent } from "preact";

interface BannerStatic {
  imageLink: string;
}

export const BannerStatic2: FunctionalComponent<BannerStatic> = ({
  imageLink,
}) => {
  return (
    <div className="bg-anti-flash-white-2 h-[220px] lg:h-[380px] rounded-[28px] lg:rounded-[40px] relative overflow-hidden">
      <img
        className="object-cover h-[100%] rounded-[28px] lg:rounded-[40px] w-[100%] scale-[4] sm:scale-[2.5] absolute top-[90%] sm:top-[0] md:top-[-50%] lg:top-[-25%] 2xl-1632:top-[-25%] right-[70%] sm:right-[50%] lg:right-[40%] object-top"
        src={imageLink}
        alt="Изображение девушки"
        loading="lazy"
      />
    </div>
  );
};
