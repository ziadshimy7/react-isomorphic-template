import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

// import NotificationContainer from "@shared/containers/notifications";
import NotificationContainer from "@shared/containers/notifications";
import { Search } from "lucide-react";
import { Footer } from "@shared/components/footer";
import { TextField } from "@shared/ui/text-field/input";
import { Button } from "@shared/ui/button";
import { HeaderDesktopContainer } from "@shared/containers/header/desktop";
// import { SideBarContainer } from "@shared/containers/sidebar";
// import { useAppDispatch } from "@shared/store/app-dispatch";

const MainLayout: FC = () => {
  // const dispatch = useAppDispatch();
  const location = useLocation();

  // useEffect(() => {
  //   dispatch(routerSlice.actions.push(location));
  // }, [dispatch, location]);

  // useEffect(() => {
  //   dispatch(initApplication());
  // }, [dispatch]);

  return (
    <>
      <NotificationContainer />
      <HeaderDesktopContainer />
      <section className="bg-linear-to-r from-gray-700 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Find Your Next Opportunity
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Discover thousands of job openings from top companies
          </p>
          <div className="bg-white rounded-lg shadow-xl p-2 flex gap-2">
            <div className="flex-1 flex items-center gap-2 px-3">
              <TextField
                wrapperClassNames="w-full"
                className="border-none"
                startElement={<Search className="size-5 text-gray-400" />}
                placeholder="Job title, keywords, or company"
              />
            </div>
            <Button size="small" color="secondary">
              Search Jobs
            </Button>
          </div>
        </div>
      </section>
      <main className="md:px-10 md:py-7.5 lg:px-15 bg-background">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
