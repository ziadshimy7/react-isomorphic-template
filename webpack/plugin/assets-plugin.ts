import { Compiler } from "webpack";
import path from "path";
import fs from "fs";

export interface AssetsPluginOptions {
  path?: string;
  entryAssetsFileName?: string;
  assetsFileName?: string;
  exclude?: RegExp;
}

const isCss = (value: string) => path.extname(value) === ".css";
const isJs = (value: string) => path.extname(value) === ".js";
const isExcluded = (value: string, exclude?: RegExp) =>
  exclude?.test(value) ?? false;

export class AssetsPlugin {
  path: string;

  entryAssetsFileName: string;

  assetsFileName: string;

  exclude?: RegExp;

  constructor({
    path = process.cwd(),
    entryAssetsFileName = "entryAssets.json",
    assetsFileName = "assets.json",
    exclude,
  }: AssetsPluginOptions = {}) {
    this.path = path;
    this.entryAssetsFileName = entryAssetsFileName;
    this.assetsFileName = assetsFileName;
    this.exclude = exclude;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync("AssetsPlugin", (compilation, callback) => {
      const {
        entrypoints: { main: { assets: entryPointsAssets = [] } } = {},
        publicPath = "",
        namedChunkGroups = {},
      } = compilation.getStats().toJson();

      fs.mkdirSync(this.path, { recursive: true });

      const entryJs = entryPointsAssets
        .filter(({ name }) => !isExcluded(name, this.exclude) && isJs(name))
        .map(({ name }) => publicPath + name);

      const entryCss = entryPointsAssets
        .filter(({ name }) => !isExcluded(name, this.exclude) && isCss(name))
        .map(({ name }) => publicPath + name);

      const assets = Object.entries(namedChunkGroups).reduce(
        (accumulateAssets, [assetName, { assets = [] }]) => ({
          ...accumulateAssets,
          [assetName]: assets.reduce<{ css: string[]; js: string[] }>(
            (accumulate, { name }) => {
              if (isExcluded(name, this.exclude)) {
                return accumulate;
              }
              if (isCss(name)) {
                accumulate.css.push(publicPath + name);
              }

              if (isJs(name)) {
                accumulate.js.push(publicPath + name);
              }

              return accumulate;
            },
            { css: [], js: [] }
          ),
        }),
        {}
      );

      fs.writeFileSync(
        path.resolve(this.path, this.assetsFileName),
        JSON.stringify(assets, null, 2)
      );
      fs.writeFileSync(
        path.resolve(this.path, this.entryAssetsFileName),
        JSON.stringify({ js: entryJs, css: entryCss }, null, 2)
      );

      callback();
    });
  }
}
