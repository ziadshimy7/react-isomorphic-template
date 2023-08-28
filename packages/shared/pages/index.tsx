import HomeContainer from "@shared/containers/home-page";
import { useSetMeta } from "@shared/utils/hooks/use-set-meta";
import { FC } from "react";

const HomePage: FC = () => {
  useSetMeta({
    description:
      "ReenBank offers secure, innovative, and customer-centric banking solutions tailored for your needs. Your financial future is our priority. Experience the difference with ReenBank today.",
    title: "ReenBank - A bank you can trust",
  });

  return (
    <div>
      <HomeContainer />
    </div>
  );
};

export default HomePage;
