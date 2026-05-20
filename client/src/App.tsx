import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import { Route, Switch, useLocation } from "wouter";
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
import PreviewSite from "./pages/PreviewSite";
import { trpc } from "./lib/trpc";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  const { data: user, isLoading } = trpc.auth.me.useQuery(undefined, {
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin opacity-40" />
      </div>
    );
  }

  if (!user) {
    setLocation("/login");
    return null;
  }

  return <>{children}</>;
}

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/preview/:id" component={PreviewSite} />
      <Route path="/404" component={NotFound} />
      <Route>
        {() => (
          <AuthGuard>
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
          </AuthGuard>
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
