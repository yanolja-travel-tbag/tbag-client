import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner.tsx";

const App = () => {
  return (
    <>
      <Outlet />
      <Toaster richColors={true} />
    </>
  );
};

export default App;
