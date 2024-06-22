import { Outlet } from "react-router-dom";
import BasicBackHeader from "@/components/Header/BasicBackHeader.tsx";

interface BasicBackHeaderLayoutProps {
  headerTitle: string;
}

const BasicBackHeaderLayout = ({ headerTitle }: BasicBackHeaderLayoutProps) => {
  return (
    <main className={"w-[390px] h-dvh mx-auto bg-white"}>
      <BasicBackHeader headerTitle={headerTitle} />
      <Outlet />
    </main>
  );
};

export default BasicBackHeaderLayout;
