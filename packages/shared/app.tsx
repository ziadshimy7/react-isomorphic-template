import { Store } from "@reduxjs/toolkit";
import { FC, Fragment, ReactNode } from "react";
import { Provider } from "react-redux";

interface AppProps {
  children: ReactNode;
  css: string[];
  js?: string[];
  store: Store;
}

export const App: FC<AppProps> = ({ children, css, js, store }) => (
  <Provider store={store}>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ReenBank</title>
        {css?.map((cssFile) => (
          <Fragment key={cssFile}>
            <link rel="preload" href={cssFile} as="style" />
            <link href={cssFile} rel="stylesheet" />
          </Fragment>
        ))}
      </head>
      <body>
        <div id="root">{children}</div>
        {js?.map((jsFile) => (
          <script key={jsFile} async src={jsFile} />
        ))}
      </body>
    </html>
  </Provider>
);
