// https://vike.dev/onRenderHtml
export default onRenderHtml;

import renderToString from "preact-render-to-string";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { cssFonts } from "../workspaces/fonts";
import logoUrl from "./logo.svg";

async function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(<Page {...pageProps} />);

  // See https://vike.dev/head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "BEATYCOOL";
  const desc = (documentProps && documentProps.description) || "BEATYCOOL: ";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:title" content="${title}" />
        <title>${title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap" rel="stylesheet">
        <style type="text/css">${cssFonts}</style>
      </head>
      <body class='font-display text-main-text'>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
}
