import { BannerStatic3 } from "@components/banner-static";
import { Section } from "@components/section";
import bannerStaticImage3 from "../assets/banner-static-image-3.webp";

export const BannerStaticBlock3 = () => {
  return (
    <Section>
      <BannerStatic3 imageLink={bannerStaticImage3} />
    </Section>
  );
};
