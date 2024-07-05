import { ArtistItem, GenreItem } from "@/apis/types.ts";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils.ts";

interface CategoryItemProps extends ComponentProps<"li"> {
  item: GenreItem | ArtistItem;
}

const CategoryItem = ({ item, className, ...props }: CategoryItemProps) => {
  return (
    <li
      className={cn(
        "min-w-[79px] h-[25px] bg-white border border-main-primary rounded-[15px] items-center text-center px-[25px] cursor-pointer text-font-info",
        className
      )}
      {...props}>
      {item.name}
    </li>
  );
};

export default CategoryItem;
