import { clsx } from "clsx";
import { Dispatch, SetStateAction } from "react";

interface FilterItemProps {
  filterValue: string;
  filterLabel: string;
  currentFilter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const FilterItem = ({
  filterValue,
  filterLabel,
  currentFilter,
  setFilter
}: FilterItemProps) => {
  return (
    <div
      className={clsx(
        "w-fit h-8 z-10 rounded-[50px] cursor-pointer",
        "flex items-center justify-center text-[12px] drop-shadow-lg border border-font-info",
        currentFilter === filterValue
          ? "bg-font-body text-white"
          : "bg-white text-font-info"
      )}
      onClick={() => setFilter(filterValue)}>
      <span className={"my-2 mx-4"}>{filterLabel}</span>
    </div>
  );
};

export default FilterItem;
