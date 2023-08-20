import { FC, ReactNode, lazy, Suspense } from "react";

type DynamicImport = () => Promise<{ default: FC }>;

interface DynamicOptions {
  asset?: string;
  fallback?: ReactNode;
}

interface ComponentDefaultProps {
  asset?: string;
}
type PageComponent = FC<ComponentDefaultProps>;

type Dynamic = (
  dynamicImport: DynamicImport,
  dynamicOptions?: DynamicOptions
) => FC;

export const dynamic: Dynamic = (dynamicImport, { fallback, asset } = {}) => {
  const LazyComponent = lazy(dynamicImport);

  const SuspenseComponent: PageComponent = () => (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );

  SuspenseComponent.defaultProps = {
    asset,
  };

  return SuspenseComponent;
};
