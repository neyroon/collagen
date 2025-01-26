import { BannerBuy } from "@components/banner-buy";
import { Section } from "@components/section";
import bannerBuyImage from "../assets/banner-buy-image.webp";

export const BannerBuyBlock = () => {
  return (
    <Section>
      <BannerBuy imageLink={bannerBuyImage} />
    </Section>
  );
};
