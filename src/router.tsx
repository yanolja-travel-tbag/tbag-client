import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATH } from "@/constants/routerPath.ts";
import SigninPage from "@/pages/SigninPage.tsx";
import PendingKakaoPage from "@/pages/PendingKakaoPage.tsx";
import PendingGooglePage from "@/pages/PendingGooglePage.tsx";
import SignupPage from "@/pages/SignupPage.tsx";
import MainPage from "@/pages/MainPage.tsx";
import BasicHeaderLayout from "@/layouts/BasicHeaderLayout.tsx";
import BasicLayout from "@/layouts/BasicLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicHeaderLayout />,
    children: [{ path: ROUTER_PATH.ROOT, element: <MainPage /> }]
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { path: ROUTER_PATH.SIGNIN, element: <SigninPage /> },
      { path: ROUTER_PATH.SIGNIN_PENDING_KAKAO, element: <PendingKakaoPage /> },
      {
        path: ROUTER_PATH.SIGNIN_PENDING_GOOGLE,
        element: <PendingGooglePage />
      },
      { path: ROUTER_PATH.SIGNUP, element: <SignupPage /> }
    ]
  }
]);

export default router;
