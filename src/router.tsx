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
import ContentsPage from "@/pages/ContentsPage.tsx";
import ContentsDetailPage from "@/pages/ContentsDetailPage.tsx";
import SchedulePage from "@/pages/SchedulePage.tsx";
import ScheduleDetailPage from "@/pages/ScheduleDetailPage.tsx";
import HistoryPage from "@/pages/HistoryPage.tsx";
import ProfilePage from "@/pages/ProfilePage.tsx";
import LanguagePage from "@/pages/LanguagePage.tsx";

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
    children: [
      { path: ROUTER_PATH.SIGNUP, element: <SignupPage /> },
      { path: ROUTER_PATH.LANGUAGE, element: <LanguagePage /> }
    ]
  },
  {
    path: "/",
    element: <BasicBackHeaderLayout headerTitleKey={"header.title.menus"} />,
    children: [{ path: ROUTER_PATH.MENUS, element: <MenusPage /> }]
  },
  {
    path: "/",
    element: <BasicBackHeaderLayout headerTitleKey={"header.title.contents"} />,
    children: [{ path: ROUTER_PATH.CONTENTS, element: <ContentsPage /> }]
  },
  {
    path: "/",
    element: (
      <BasicBackHeaderLayout headerTitleKey={"header.title.contentDetail"} />
    ),
    children: [
      {
        path: ROUTER_PATH.CONTENTS_DETAIL(":id"),
        element: <ContentsDetailPage />
      }
    ]
  },
  {
    path: "/",
    element: <BasicBackHeaderLayout headerTitleKey={"header.title.schedule"} />,
    children: [
      {
        path: ROUTER_PATH.SCHEDULE,
        element: <SchedulePage />
      },
      {
        path: ROUTER_PATH.SCHEDULE_DETAIL(":id"),
        element: <ScheduleDetailPage />
      }
    ]
  },
  {
    path: "/",
    element: <BasicBackHeaderLayout headerTitleKey={"header.title.history"} />,
    children: [{ path: ROUTER_PATH.HISTORY, element: <HistoryPage /> }]
  },
  {
    path: "/",
    element: <BasicBackHeaderLayout headerTitleKey={"header.title.profile"} />,
    children: [{ path: ROUTER_PATH.PROFILE, element: <ProfilePage /> }]
  }
]);

export default router;
