import { ArrowLeft } from "@/components/icons";
import { useNavigate } from "react-router-dom";

const BackHeader = () => {
  const navigate = useNavigate();
  return (
    <header
      className={"w-full h-[46px] flex justify-start items-center px-[21px]"}>
      <ArrowLeft
        width={12}
        height={12}
        className={"cursor-pointer"}
        onClick={() => navigate(-1)}
      />
    </header>
  );
};

export default BackHeader;
