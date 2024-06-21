import { ArtistItem, GenreItem } from "@/apis/types.ts";
import { ComponentProps } from "react";

interface CategoryItemProps extends ComponentProps<"li"> {
  item: GenreItem | ArtistItem;
}

const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <li
      className={
        "min-w-[79px] h-[25px] bg-white border border-main-primary rounded-[15px] items-center text-center px-[25px] cursor-pointer text-font-info"
      }>
      {item.name.kor}
    </li>
  );
};

export default CategoryItem;
