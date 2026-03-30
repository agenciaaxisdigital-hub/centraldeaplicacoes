import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";
import VersionMonitor from "./components/VersionMonitor";
import { useOfflineSync } from "./hooks/useOfflineSync";

function GlobalOfflineSync() {
  useOfflineSync();
  return null;
}

const App = () => (
  <TooltipProvider>
    <GlobalOfflineSync />
    <VersionMonitor />
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
