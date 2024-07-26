import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { clsx } from "clsx";
import { useQuery } from "@tanstack/react-query";
import getUserContentHistory from "@/apis/getUserContentHistory.ts";
import authStore from "@/store/authStore.ts";
import getUserPlaceHistory from "@/apis/getUserPlaceHistory.ts";
import ContentPreview from "@/components/Preview/ContentPreview.tsx";
import { useI18n } from "@/hooks/useI18n.ts";

const HistoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<"content" | "place">(
    "content"
  );
  const { userId } = authStore();
  const t = useI18n();
  const { data: contentHistory } = useQuery({
    queryKey: ["history", "content"],
    queryFn: () => getUserContentHistory(userId!),
    enabled: Boolean(userId && selectedCategory === "content")
  });

  const { data: placeHistory } = useQuery({
    queryKey: ["history", "place"],
    queryFn: () => getUserPlaceHistory(userId!),
    enabled: Boolean(userId && selectedCategory === "place")
  });

  return (
    <div className={"flex flex-col"}>
      <div className={"flex gap-[9px] justify-center items-center py-[19px]"}>
        <Button
          variant={"ghost"}
          className={clsx(
            "h-[35px] py-[10px] px-[17px] border border-main-primary rounded-[40px] shadow-md font-light",
            selectedCategory === "content" && "bg-main-primary/20"
          )}
          onClick={() => setSelectedCategory("content")}>
          {t("history.tab.label.viewedContents")}
        </Button>
        <Button
          variant={"ghost"}
          className={clsx(
            "h-[35px] py-[10px] px-[17px] border border-main-primary rounded-[40px] shadow-md font-light",
            selectedCategory === "place" && "bg-main-primary/20"
          )}
          onClick={() => setSelectedCategory("place")}>
          {t("history.tab.label.viewedPlaces")}
        </Button>
      </div>
      {selectedCategory === "content" && (
        <div className={"flex flex-col px-[20px]"}>
          {contentHistory?.content.map((content) => (
            <ContentPreview
              data={content}
              key={content.contentId}
            />
          ))}
        </div>
      )}
      {selectedCategory === "place" && (
        <div className={"flex flex-col px-[20px]"}>
          {placeHistory?.content.map((place) => (
            <ContentPreview
              data={place}
              key={place.locationId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
