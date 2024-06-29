import { Menus, Search, TbagHeaderLogo } from "@/components/icons";
import { useNavigate } from "react-router-dom";
import SearchDialog from "@/components/Dialog/SearchDialog.tsx";

const BasicHeader = () => {
  const navigate = useNavigate();

  return (
    <header
      className={"w-full h-[82px] flex items-center px-6 justify-between"}>
      <TbagHeaderLogo
        width={110}
        height={42}
      />
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
          className={"cursor-pointer"}
          width={32}
          height={32}
          onClick={() => navigate("/menus")}
        />
      </div>
    </header>
  );
};

export default BasicHeader;
