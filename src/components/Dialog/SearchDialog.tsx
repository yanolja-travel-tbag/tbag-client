import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog.tsx";
import { ReactNode, useRef, useState } from "react";
import { clsx } from "clsx";
import { Search, TrashCan } from "@/components/icons";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/hooks/useI18n.ts";

interface SearchDialogProps {
  trigger: ReactNode;
}

const SearchDialog = ({ trigger }: SearchDialogProps) => {
  const [searchFilter, setSearchFilter] =
    useState<keyof typeof SEARCH_FILTER_LABEL>("place");
  const searchBarRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const t = useI18n();

  const handleSearch = () => {
    navigate({
      pathname: "/search/" + searchFilter,
      search: `?keyword=${searchBarRef.current?.value}`
    });
  };

  const SEARCH_FILTER_LABEL = {
    place: t("dialog.search.filter.label.place"),
    work: t("dialog.search.filter.label.work"),
    star: t("dialog.search.filter.label.artist")
  };

  const PLACEHOLDER_LABEL = {
    place: t("dialog.search.placeholder.place"),
    work: t("dialog.search.placeholder.work"),
    star: t("dialog.search.placeholder.artist")
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className={"w-[350px] rounded-[8px] p-0 gap-0"}>
        <DialogHeader className={"flex h-[120px] gap-3 p-5 bg-background-main"}>
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
              ref={searchBarRef}
              className={
                "h-9 w-full px-4 border border-main-primary rounded-[8px] placeholder:text-[12px] placeholder:my-auto focus:outline-none"
              }
              placeholder={PLACEHOLDER_LABEL[searchFilter]}
            />
            <DialogClose asChild>
              <Search
                className={"absolute right-4 top-2.5 cursor-pointer"}
                width={16}
                height={16}
                onClick={handleSearch}
              />
            </DialogClose>
          </div>
        </DialogHeader>
        <DialogFooter
          className={clsx(
            "flex flex-col h-[250px] bg-background-deep w-full p-0 px-[12px] py-[15px]",
            "sm:flex-col sm:justify-start"
          )}>
          <div
            className={"flex justify-between px-[10px] items-center py-[10px]"}>
            <span className={"text-[12px] text-font-body font-semibold"}>
              {t("dialog.search.label.recentSearch")}
            </span>
            <TrashCan
              width={16}
              height={16}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
