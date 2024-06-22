import { useEffect } from "react";
import postUserSignout from "@/apis/postUserSignout.ts";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import authStore from "@/store/authStore.ts";

const SignoutPage = () => {
  const navigate = useNavigate();
  const { removeAllAuthInfo } = authStore();
  useEffect(() => {
    // 로그아웃 요청
    postUserSignout()
      .then(() => {
        toast.success("정상적으로 로그아웃되었습니다!");
        removeAllAuthInfo();
        navigate("/");
      })
      .catch(() => {
        toast.error("로그아웃에 실패했습니다. 새로고침 후 다시 시도해주세요. ");
        removeAllAuthInfo();
        navigate("/signin");
      });
  }, []);
  return (
    <div>
      <h1>Logout....</h1>
    </div>
  );
};

export default SignoutPage;
