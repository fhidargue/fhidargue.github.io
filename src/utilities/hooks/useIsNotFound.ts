import { useLocation } from "react-router-dom";

import { ROUTE_PATHS } from "@constants/routes";

const useIsNotFound = () => {
  const { pathname } = useLocation();

  return !ROUTE_PATHS.includes(pathname as (typeof ROUTE_PATHS)[number]);
};

export default useIsNotFound;
