import { Menus, Search, TbagHeaderLogo } from "@/components/icons";

const BasicHeader = () => {
  return (
    <header
      className={"w-full h-[82px] flex items-center px-6 justify-between"}>
      <TbagHeaderLogo
        width={110}
        height={42}
      />
      <div className={"flex items-center gap-x-3.5"}>
        <Search
          width={32}
          height={32}
        />
        <Menus
          width={32}
          height={32}
        />
      </div>
    </header>
  );
};

export default BasicHeader;
