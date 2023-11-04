import { ProtectedRoute } from "@shared/components/protected-route";
import HomeContainer from "@shared/containers/home-page-summary";
import { isAuthorizedSelector } from "@shared/store/auth/selectors";
import { useSetMeta } from "@shared/utils/hooks/use-set-meta";
import { FC } from "react";
import { useSelector } from "react-redux";

const HomePage: FC = () => {
  const isAuthorized = useSelector(isAuthorizedSelector);

  useSetMeta({
    description:
      "TrustBank offers secure, innovative, and customer-centric banking solutions tailored for your needs. Your financial future is our priority. Experience the difference with TrustBank today.",
    title: "TrustBank - A bank you can trust",
  });

  return (
    <ProtectedRoute isAuthorized={isAuthorized} redirectPath="/auth">
      <HomeContainer />
    </ProtectedRoute>
  );
};

export default HomePage;
