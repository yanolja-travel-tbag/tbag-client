import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SigninPendingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const isMember = searchParams.get("isRegistered") === "true";
    const acToken = searchParams.get("accessToken");
    const rfToken = searchParams.get("refreshToken");
    const userId = searchParams.get("userId");

    if (isMember) {
      navigate("/");
    }
    if (!isMember) {
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
