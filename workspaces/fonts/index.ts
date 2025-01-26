import HalvarBold from "./HalvarBreit-Bd.woff2";
import HalvarMedium from "./HalvarBreit-Md.woff2";
import HalvarExtraBold from "./HalvarBreit-XBd.woff2";

export const cssFonts = `
 @font-face {
    font-family: Halvar Breitschrift;
    font-display: swap;
    font-weight: 500;
    src: url(${HalvarMedium}) format(woff2);
  }

  @font-face {
    font-family: Halvar Breitschrift;
    font-display: swap;
    font-weight: 700;
    src: url(${HalvarBold}) format(woff2);
  }

  @font-face {
    font-family: Halvar Breitschrift;
    font-display: swap;
    font-weight: 800;
    src: url(${HalvarExtraBold}) format(woff2);
    }
`;
