import { Route, Routes } from "react-router";

import Home from "@pages/Home";
import NotFound from "@pages/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
