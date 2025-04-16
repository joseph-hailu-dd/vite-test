import {
  StrictMode,
  Suspense,
  // lazy
} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.tsx";
import ReloadPrompt from "./ReloadPrompt.tsx";
import Lazy from "./Lazy";
// const Lazy = lazy(() => import("./Lazy"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReloadPrompt />
    <Suspense fallback={<div>...Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/lazy" element={<Lazy />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
