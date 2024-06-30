import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATH } from "@/constants/routerPath.ts";
import SigninPage from "@/pages/SigninPage.tsx";
import SignupPage from "@/pages/SignupPage.tsx";
import MainPage from "@/pages/MainPage.tsx";
import BasicHeaderLayout from "@/layouts/BasicHeaderLayout.tsx";
import BasicLayout from "@/layouts/BasicLayout.tsx";
import SigninPendingPage from "@/pages/SigninPendingPage.tsx";
import BasicBackLayout from "@/layouts/BasicBackLayout.tsx";
import BasicBackHeaderLayout from "@/layouts/BasicBackHeaderLayout.tsx";
import MenusPage from "@/pages/MenusPage.tsx";
import SignoutPage from "@/pages/SignoutPage.tsx";
import SearchResultPage from "@/pages/SearchResultPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicHeaderLayout />,
    children: [{ path: ROUTER_PATH.ROOT, element: <MainPage /> }]
  },
  {
    path: "/",
    element: <BasicHeaderLayout withFooter />,
    children: [
      {
        path: ROUTER_PATH.SEARCH_RESULT(":type"),
        element: <SearchResultPage />
      }
    ]
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { path: ROUTER_PATH.SIGNIN, element: <SigninPage /> },
      { path: ROUTER_PATH.SIGNIN_PENDING, element: <SigninPendingPage /> },
      { path: ROUTER_PATH.SIGNOUT, element: <SignoutPage /> }
    ]
  },
  {
    path: "/",
    element: <BasicBackLayout />,
    children: [{ path: ROUTER_PATH.SIGNUP, element: <SignupPage /> }]
  },
  {
    path: "/",
    element: <BasicBackHeaderLayout headerTitle={"서비스 메뉴"} />,
    children: [{ path: ROUTER_PATH.MENUS, element: <MenusPage /> }]
  }
]);

export default router;
