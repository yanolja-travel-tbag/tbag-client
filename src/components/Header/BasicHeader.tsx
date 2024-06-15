import { Menus, Search, TbagTitle } from "@/components/icons";

const BasicHeader = () => {
  return (
    <header
      className={"w-full h-[82px] flex items-center px-6 justify-between"}>
      <TbagTitle
        width={80}
        height={22}
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
