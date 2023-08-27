import { FC } from "react";
import { useSelector } from "react-redux";

import { HeadMeta } from "@shared/components/head-meta";
import { metaSelector } from "@shared/store/slices/selectors";

export const HeadMetaContainer: FC = () => {
  const meta = useSelector(metaSelector);

  return <HeadMeta meta={meta} />;
};
