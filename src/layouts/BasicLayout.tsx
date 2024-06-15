import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <div className={"h-dvh w-[390px] mx-auto bg-white"}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BasicLayout;
