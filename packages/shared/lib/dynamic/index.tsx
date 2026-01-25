import { FC, ReactNode, lazy, Suspense } from "react";

import { Meta } from "@shared/interfaces/ui";
import { RootStore } from "@shared/store/types";

interface GetInitialMetaParams {
  store: RootStore;
}

export type GetInitialMeta = (params: GetInitialMetaParams) => Meta | void;

export type DynamicImportResult = Promise<{
  default: FC;
  getInitialMeta?: GetInitialMeta;
}>;

export type DynamicImport = () => DynamicImportResult;

interface DynamicOptions {
  fallback?: ReactNode;
}

interface ComponentDefaultProps {
  asset?: string;
  dynamicImport?: DynamicImport;
}

export type PageComponent = FC<ComponentDefaultProps>;

type Dynamic = (
  dynamicImport: DynamicImport,
  dynamicOptions?: DynamicOptions
) => FC;

export const dynamic: Dynamic = (dynamicImport, dynamicOptions) => {
  const LazyComponent = lazy(dynamicImport);

  const SuspenseComponent = () => (
    <Suspense fallback={dynamicOptions?.fallback}>
      <LazyComponent />
    </Suspense>
  );

  return SuspenseComponent;
};
