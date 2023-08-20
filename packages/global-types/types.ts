export enum WebpackChunksNames {
  Vendor = "vendor",
  Webpack = "webpack",
}

export interface Assets {
  js: string[];
  css: string[];
}

export type FileAssets = Record<string, Assets>;
