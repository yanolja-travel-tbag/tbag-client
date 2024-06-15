import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 3
    }
  }
};

const queryClient = new QueryClient(config);

export default queryClient;
