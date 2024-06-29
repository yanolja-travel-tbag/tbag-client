import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.tsx";
import { ReactNode, useState } from "react";
import { clsx } from "clsx";
import { cn } from "@/lib/utils.ts";
import { SearchIcon } from "lucide-react";
import { Search } from "@/components/icons";

const SEARCH_FILTER_LABEL = {
  place: "장소",
  work: "작품",
  star: "연예인"
};

interface SearchDialogProps {
  trigger: ReactNode;
}

const SearchDialog = ({ trigger }: SearchDialogProps) => {
  const [searchFilter, setSearchFilter] =
    useState<keyof typeof SEARCH_FILTER_LABEL>("place");
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className={"w-[350px] rounded-[8px] p-0 gap-0"}>
        <DialogHeader className={"flex h-[120px] gap-3 p-5"}>
          <div className={"flex gap-[6px]"}>
            {Object.keys(SEARCH_FILTER_LABEL).map((key) => (
              <div
                key={key}
                className={clsx(
                  "w-[63px] px-2.5 py-1.5 h-7 text-[12px] text-white rounded-[10px] cursor-pointer flex justify-center items-center",
                  searchFilter === key ? "bg-main-primary" : "bg-font-disable"
                )}
                onClick={() =>
                  setSearchFilter(key as keyof typeof SEARCH_FILTER_LABEL)
                }>
                <span>
                  {SEARCH_FILTER_LABEL[key as keyof typeof SEARCH_FILTER_LABEL]}
                </span>
              </div>
            ))}
          </div>
          <div className={"relative"}>
            <input
              className={
                "h-9 w-full px-4 border border-main-primary rounded-[8px] placeholder:text-[12px] placeholder:my-auto focus:outline-none"
              }
              placeholder={"지역 또는 장소명을 검색하세요."}
            />
            <Search
              className={"absolute right-4 top-2.5 cursor-pointer"}
              width={16}
              height={16}
            />
          </div>
        </DialogHeader>
        <DialogFooter
          className={"h-[250px] bg-background-deep w-full p-0"}></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
