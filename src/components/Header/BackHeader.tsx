import { ArrowLeft } from "@/components/icons";

const BackHeader = () => {
  return (
    <header
      className={"w-full h-[46px] flex justify-start items-center px-[21px]"}>
      <ArrowLeft
        width={12}
        height={12}
        className={"cursor-pointer"}
        onClick={() => {}}
      />
    </header>
  );
};

export default BackHeader;
