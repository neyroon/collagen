import { BannerStatic2 } from "@components/banner-static";
import { Section } from "@components/section";
import bannerStaticImage2 from "../assets/banner-static-image-2.webp";

export const BannerStaticBlock2 = () => {
  return (
    <Section>
      <BannerStatic2 imageLink={bannerStaticImage2} />
    </Section>
  );
};
