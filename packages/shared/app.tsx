import { Store } from "@reduxjs/toolkit";
import { FC, Fragment, ReactNode } from "react";
import { Provider } from "react-redux";

interface AppProps {
  children: ReactNode;
  css: string[];
  js?: string[];
  store: Store;
  devMode?: boolean;
  ssrCss?: string;
}

export const App: FC<AppProps> = ({
  children,
  css = [],
  store,
  devMode = false,
  ssrCss = "",
}) => (
  <Provider store={store}>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="theme-color" content="white" />
        {ssrCss && <style dangerouslySetInnerHTML={{ __html: ssrCss }} />}
        {devMode && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.$RefreshReg$ = () => {};
                  window.$RefreshSig$ = () => (type) => type;
                  window.__vite_plugin_react_preamble_installed__ = true;
                `,
              }}
            />
            <script type="module" src="/@vite/client" />
            <script
              type="module"
              dangerouslySetInnerHTML={{
                __html: `
                  import RefreshRuntime from '/@react-refresh';
                  RefreshRuntime.injectIntoGlobalHook(window);
                `,
              }}
            />
          </>
        )}
        {css.map((cssFile) => (
          <Fragment key={cssFile}>
            <link rel="preload" href={cssFile} as="style" />
            <link href={cssFile} rel="stylesheet" />
          </Fragment>
        ))}
      </head>
      <body>{children}</body>
    </html>
  </Provider>
);
