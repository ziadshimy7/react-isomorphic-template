import { Meta } from "@shared/store/types/ui";
import { FC } from "react";

interface HeadMetaProps {
  meta?: Meta;
}

export const HeadMeta: FC<HeadMetaProps> = ({ meta }) => {
  if (!meta) {
    return null;
  }

  const { title, description, ...openGraph } = meta;

  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {Object.entries(openGraph).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
    </>
  );
};
