import { BannerBuyBlock } from "./blocks/banner-buy-block";
import { BannerStaticBlock1 } from "./blocks/banner-static-block-1";
import { BannerStaticBlock2 } from "./blocks/banner-static-block-2";
import { BannerStaticBlock3 } from "./blocks/banner-static-block-3";
import { FooterBlock } from "./blocks/footer-block";
import { ForEyeBrowsBlock } from "./blocks/for-eyebrows-block";
import { ForLipsBlock } from "./blocks/for-lips-block";
import { HeaderBlock } from "./blocks/header-block";
import { HeroBlock } from "./blocks/hero-block";
import { HitsBlock } from "./blocks/hits-block";
import { NewItemsBlock } from "./blocks/new-items-block";
import { ProductsForFaceBlock } from "./blocks/products-for-face-block";

export default Page;

function Page() {
  return (
    <>
      <HeaderBlock />
      <main>
        <HeroBlock />
        <NewItemsBlock />
        <BannerBuyBlock />
        <HitsBlock />
        <BannerStaticBlock1 />
        <ProductsForFaceBlock />
        <BannerStaticBlock2 />
        <ForEyeBrowsBlock />
        <BannerStaticBlock3 />
        <ForLipsBlock />
      </main>
      <FooterBlock />
    </>
  );
}
