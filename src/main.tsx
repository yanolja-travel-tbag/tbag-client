import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/query/client.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NavermapsProvider } from "react-naver-maps";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <NavermapsProvider ncpClientId={import.meta.env.VITE_NCP_CLIENT_ID}>
      <RouterProvider router={router} />
    </NavermapsProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
