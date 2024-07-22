import { Outlet } from "react-router-dom";
import BasicBackHeader from "@/components/Header/BasicBackHeader.tsx";
import BasicFooter from "@/components/Footer/BasicFooter.tsx";
import { useI18n } from "@/hooks/useI18n.ts";

interface BasicBackHeaderLayoutProps {
  headerTitleKey: string;
}

const BasicBackHeaderLayout = ({
  headerTitleKey
}: BasicBackHeaderLayoutProps) => {
  const t = useI18n();
  return (
    <main className={"w-[390px] h-full mx-auto bg-white"}>
      <BasicBackHeader headerTitle={t(headerTitleKey)} />
      <Outlet />
      <BasicFooter />
    </main>
  );
};

export default BasicBackHeaderLayout;
