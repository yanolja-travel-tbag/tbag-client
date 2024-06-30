import BasicHeader from "@/components/Header/BasicHeader.tsx";
import { Outlet } from "react-router-dom";
import BasicFooter from "@/components/Footer/BasicFooter.tsx";

interface BasicHeaderLayoutProps {
  withFooter?: boolean;
}

const BasicHeaderLayout = ({ withFooter = false }: BasicHeaderLayoutProps) => {
  return (
    <main className={"w-[390px] h-dvh mx-auto bg-white"}>
      <BasicHeader />
      <Outlet />
      {withFooter && <BasicFooter />}
    </main>
  );
};

export default BasicHeaderLayout;
