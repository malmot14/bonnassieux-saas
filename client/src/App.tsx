import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Tours from "./pages/Tours";
import Scripts from "./pages/Scripts";
import Coaching from "./pages/Coaching";
import LeadDetail from "./pages/LeadDetail";
import CommunicationTools from "./pages/CommunicationTools";
import ProspectsPotentiels from "./pages/ProspectsPotentiels";
import Tournees from "./pages/Tournees";
import Admin from "./pages/Admin";

function Router() {
  return (
    <Switch>
      {/* AUTH BYPASS — redirige /login vers / */}
      <Route path="/login">{() => { window.location.replace("/"); return null; }}</Route>
      <Route path="/404" component={NotFound} />
      <Route>
        {() => (
          <DashboardLayout>
            <Switch>
              <Route path="/" component={Dashboard} />
              <Route path="/leads" component={Leads} />
              <Route path="/leads/:id" component={LeadDetail} />
              <Route path="/tours" component={Tours} />
              <Route path="/tournees" component={Tournees} />
              <Route path="/scripts" component={Scripts} />
              <Route path="/coaching" component={Coaching} />
              <Route path="/communication-tools" component={CommunicationTools} />
              <Route path="/prospects-potentiels" component={ProspectsPotentiels} />
              <Route path="/admin" component={Admin} />
              <Route component={NotFound} />
            </Switch>
          </DashboardLayout>
        )}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
