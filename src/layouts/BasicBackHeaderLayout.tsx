import { Outlet } from "react-router-dom";
import BasicBackHeader from "@/components/Header/BasicBackHeader.tsx";
import BasicFooter from "@/components/Footer/BasicFooter.tsx";

interface BasicBackHeaderLayoutProps {
  headerTitle: string;
}

const BasicBackHeaderLayout = ({ headerTitle }: BasicBackHeaderLayoutProps) => {
  return (
    <main className={"w-[390px] h-dvh mx-auto bg-white"}>
      <BasicBackHeader headerTitle={headerTitle} />
      <Outlet />
      <BasicFooter />
    </main>
  );
};

export default BasicBackHeaderLayout;
