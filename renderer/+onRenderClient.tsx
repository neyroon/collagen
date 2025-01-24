// https://vike.dev/onRenderClient
export default onRenderClient;

import { hydrate } from "preact";
import "./index.css";

async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext;
  const body = document.querySelector("body");
  hydrate(<Page {...pageProps} />, body);
}
