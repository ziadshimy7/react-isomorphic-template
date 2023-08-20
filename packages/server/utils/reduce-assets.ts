import { Assets, FileAssets } from "packages/global-types/types";

export const reduceAssets = (
  pathsAssets: string[],
  fileAssets: FileAssets,
  defaultAssets: Assets = { js: [], css: [] }
): Assets =>
  pathsAssets.reduce<Assets>((accumulate, assetName) => {
    const asset = fileAssets[assetName];

    if (asset) {
      const { css, js } = asset;

      return {
        js: accumulate.js.concat(js),
        css: accumulate.css.concat(css),
      };
    }

    return accumulate;
  }, defaultAssets);
