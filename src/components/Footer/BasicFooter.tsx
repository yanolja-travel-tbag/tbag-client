import { useI18n } from "@/hooks/useI18n.ts";

const TERMS_URL =
  "https://thirsty-wandflower-dee.notion.site/cacaf0f5bdd8499db298c88dabb1f750";
const PRIVACY_POLICY_URL =
  "https://thirsty-wandflower-dee.notion.site/7a6a556b0ce8478ca66a18477b2f537a";

const BasicFooter = () => {
  const t = useI18n();
  return (
    <footer
      className={
        "w-full h-[120px] bg-background-deep flex items-center justify-center"
      }>
      <p
        className={
          "flex flex-col gap-[13px] text-center text-[12px] text-font-info"
        }>
        <span>
          {t("footer.customerService")} ｜{" "}
          <a href={TERMS_URL}>{t("footer.terms")}</a> ｜
          <a href={PRIVACY_POLICY_URL}>{t("footer.privacy")}</a>
        </span>
        <span>All rights reserved @TravelYoung · TBAG</span>
        <span>dev ver 1.1</span>
      </p>
    </footer>
  );
};

export default BasicFooter;
