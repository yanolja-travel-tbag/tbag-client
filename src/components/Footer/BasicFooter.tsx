const BasicFooter = () => {
  return (
    <footer
      className={
        "w-full h-[120px] bg-background-deep flex items-center justify-center"
      }>
      <p
        className={
          "flex flex-col gap-[13px] text-center text-[12px] text-font-info"
        }>
        <span>고객센터 ｜ 이용약관 ｜ 개인정보처리방침</span>
        <span>All rights reserved @TravelYoung · TBAG</span>
        <span>dev ver 1.1</span>
      </p>
    </footer>
  );
};

export default BasicFooter;
