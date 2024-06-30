export const ROUTER_PATH = {
  ROOT: "/",
  SIGNIN: "/signin",
  SIGNIN_PENDING: "/signin/pending/redirect",
  SIGNUP: "/signup",
  SIGNOUT: "/signout",
  MENUS: "/menus",
  SEARCH_RESULT: (type: string) => `/search/${type}`
} as const;
