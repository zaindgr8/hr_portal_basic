import { useState } from "react";
import Layout from "./components/Layout";
import Dashboard from "./views/Dashboard";
import Candidates from "./views/Candidates";
import CandidateDetail from "./views/CandidateDetail";
import Roles from "./views/Roles";
import Exceptions from "./views/Exceptions";
import AuditPacks from "./views/AuditPacks";
import Cessations from "./views/Cessations";
import Settings from "./views/Settings";
import { ToastProvider } from "./components/ToastContext";

export type ViewState =
  | "dashboard"
  | "candidates"
  | "candidate-detail"
  | "roles"
  | "exceptions"
  | "audit"
  | "cessations"
  | "settings";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>("dashboard");
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(
    null,
  );

  const navigateTo = (view: ViewState, id?: string) => {
    setCurrentView(view);
    if (id) setSelectedCandidateId(id);
  };

  return (
    <ToastProvider>
      <Layout currentView={currentView} navigateTo={navigateTo}>
        {currentView === "dashboard" && <Dashboard navigateTo={navigateTo} />}
        {currentView === "candidates" && <Candidates navigateTo={navigateTo} />}
        {currentView === "candidate-detail" && selectedCandidateId && (
          <CandidateDetail id={selectedCandidateId} navigateTo={navigateTo} />
        )}
        {currentView === "roles" && <Roles />}
        {currentView === "exceptions" && <Exceptions />}
        {currentView === "audit" && <AuditPacks />}
        {currentView === "cessations" && <Cessations />}
        {currentView === "settings" && <Settings />}
      </Layout>
    </ToastProvider>
  );
}
