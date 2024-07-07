export const ROUTER_PATH = {
  ROOT: "/",
  SIGNIN: "/signin",
  SIGNIN_PENDING: "/signin/pending/redirect",
  SIGNUP: "/signup",
  SIGNOUT: "/signout",
  MENUS: "/menus",
  SEARCH_RESULT: (type: string) => `/search/${type}`,
  CONTENTS: "/contents",
  CONTENTS_DETAIL: (id: string) => `/contents/${id}`,
  SCHEDULE: "/schedule",
  SCHEDULE_DETAIL: (id: string) => `/schedule/${id}`
} as const;
