export const getCssAssetsMarkup = (cssAssets: string[]) =>
  `window.__CSS_ASSETS__=${JSON.stringify(cssAssets)};`;

export const getJsAssetsMarkup = (jsAssets: string[]) =>
  `window.__JS_ASSETS__=${JSON.stringify(jsAssets)};`;
