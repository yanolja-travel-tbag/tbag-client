import { Outlet } from "react-router-dom";
import BackHeader from "@/components/Header/BackHeader.tsx";

const BasicBackLayout = () => {
  return (
    <main className={"w-[390px] h-dvh mx-auto bg-white"}>
      <BackHeader />
      <Outlet />
    </main>
  );
};

export default BasicBackLayout;
