import BasicHeader from "@/components/Header/BasicHeader.tsx";
import { Outlet } from "react-router-dom";

const BasicHeaderLayout = () => {
  return (
    <div className={"w-[390px] h-dvh mx-auto bg-white"}>
      <BasicHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BasicHeaderLayout;
