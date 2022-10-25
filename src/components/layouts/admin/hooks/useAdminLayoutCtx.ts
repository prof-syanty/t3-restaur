import { AdminLayoutContext } from "@components/layouts/admin/layout";
import { useContext } from "react";

function useAdminLayoutCtx() {
  const ctx = useContext(AdminLayoutContext);
  return {
    ...ctx,
  };
}

export default useAdminLayoutCtx;
