import BasicHeader from "@/components/Header/BasicHeader.tsx";
import { Outlet } from "react-router-dom";

const BasicHeaderLayout = () => {
  return (
    <main className={"w-[390px] h-dvh mx-auto bg-white"}>
      <BasicHeader />
      <Outlet />
    </main>
  );
};

export default BasicHeaderLayout;
