import { FunctionalComponent } from "preact";

interface BannerStatic {
  imageLink: string;
}

export const BannerStatic3: FunctionalComponent<BannerStatic> = ({
  imageLink,
}) => {
  return (
    <div className="bg-anti-flash-white-2 h-[220px] lg:h-[380px] rounded-[28px] lg:rounded-[40px] relative overflow-hidden">
      <img
        className="object-cover h-[100%] rounded-[28px] lg:rounded-[40px] w-[100%] scale-[8] s-448:scale-[6] sm:scale-[3] absolute top-[160%] s-448:top-[65%] sm:top-[-50%] md:top-[-100%] lg:top-[-35%] xl:top-[-50%] left-[120%] s-448:left-[90%] sm:left-[45%] object-top"
        src={imageLink}
        alt="Изображение девушки"
        loading="lazy"
      />
    </div>
  );
};
