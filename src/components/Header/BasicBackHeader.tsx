import { ArrowLeft, Menus, Search } from "@/components/icons";
import { useNavigate } from "react-router-dom";
import SearchDialog from "@/components/Dialog/SearchDialog.tsx";

interface BasicBackHeaderProps {
  headerTitle: string;
}

const BasicBackHeader = ({ headerTitle }: BasicBackHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header
      className={"w-full h-[82px] flex items-center px-6 justify-between"}>
      <div className={"flex items-center gap-x-[10px]"}>
        <ArrowLeft
          width={12}
          height={12}
          color={"#C4C4C4"}
          className={"cursor-pointer"}
          onClick={() => navigate(-1)}
        />
        <span className={"text-font-info text-[20px] font-semibold"}>
          {headerTitle}
        </span>
      </div>
      <div className={"flex items-center gap-x-3.5"}>
        <SearchDialog
          trigger={
            <Search
              className={"cursor-pointer"}
              width={32}
              height={32}
            />
          }
        />
        <Menus
          width={32}
          className={"cursor-pointer"}
          height={32}
        />
      </div>
    </header>
  );
};

export default BasicBackHeader;
