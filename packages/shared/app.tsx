import { FC, Fragment, ReactNode } from "react";

interface AppProps {
  children: ReactNode;
  css: string[];
  js?: string[];
}

export const App: FC<AppProps> = ({ children, css, js }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Test template</title>
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
);
