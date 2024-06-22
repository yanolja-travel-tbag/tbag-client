import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import authStore from "@/store/authStore.ts";

const SigninPendingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setUserId, setToken, setRegistered } = authStore();
  useEffect(() => {
    const isMember = searchParams.get("isRegistered") === "true";
    const acToken = searchParams.get("accessToken");
    const rfToken = searchParams.get("refreshToken");
    const userId = searchParams.get("userId");

    userId && setUserId(userId);
    acToken && rfToken && setToken(acToken, rfToken);

    if (isMember) {
      setRegistered(true);
      navigate("/");
    }
    if (!isMember) {
      setRegistered(false);
      navigate("/signup");
    }
  }, []);
  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default SigninPendingPage;
