import { FunctionalComponent } from "preact";

interface Section {
  title?: string;
  id?: string;
}

export const Section: FunctionalComponent<Section> = ({
  title,
  children,
  id,
}) => {
  return (
    <section
      id={id}
      className="px-[15px] lg:px-[20px] xl:px-[100px] xl-1392:px-[140px] 2xl:px-[210px] 2xl-1632:px-[288px] flex flex-col my-[40px] lg:my-[120px] scroll-mt-[84px] lg:scroll-mt-[144px]"
    >
      {title && (
        <h2 className="text-[26px]/[32px] lg:text-[48px]/[54px] mb-[20px] lg:mb-[40px] font-halvar font-extrabold uppercase">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
