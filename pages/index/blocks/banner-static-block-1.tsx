import { BannerStatic1 } from "@components/banner-static";
import { Section } from "@components/section";
import bannerStaticImage1 from "../assets/banner-static-image-1.webp";

export const BannerStaticBlock1 = () => {
  return (
    <Section>
      <BannerStatic1 imageLink={bannerStaticImage1} />
    </Section>
  );
};
