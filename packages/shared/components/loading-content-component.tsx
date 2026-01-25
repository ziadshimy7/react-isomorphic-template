import { LoadingStatus } from "@shared/store/loading/types";
import { Loader } from "lucide-react";
import { FC, ReactNode } from "react";

interface PageContentProps {
  children?: ReactNode;
  error?: ReactNode;
  loader?: ReactNode;
  loadingStatus?: LoadingStatus;
  emptyInitial?: boolean;
  renderOnFail?: boolean;
}

export const LoadingContentComponent: FC<PageContentProps> = ({
  loadingStatus,
  children,
  loader = <Loader />,
  error = "Ошибка загрузки данных",
  emptyInitial = false,
  renderOnFail = false,
}) => {
  if (emptyInitial && loadingStatus === LoadingStatus.Initial) {
    return null;
  }

  if (loadingStatus === LoadingStatus.Fulfilled || renderOnFail) {
    return <>{children}</>;
  }

  if (loadingStatus === LoadingStatus.Rejected) {
    return <div className="flex flex-1 justify-center pt-8">{error}</div>;
  }

  return <div className="flex flex-1 justify-center pt-8">{loader}</div>;
};
