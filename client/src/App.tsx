import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { StorefrontProvider } from "./contexts/StorefrontContext";
import Home from "./pages/Home";
const Shop = lazy(() => import("@/pages/Shop"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const { Account, Cart, Checkout, Wishlist } = {
  Account: lazy(async () => ({ default: (await import("./pages/CommercePages")).Account })),
  Cart: lazy(async () => ({ default: (await import("./pages/CommercePages")).Cart })),
  Checkout: lazy(async () => ({ default: (await import("./pages/CommercePages")).Checkout })),
  Wishlist: lazy(async () => ({ default: (await import("./pages/CommercePages")).Wishlist })),
};

function Router() {
  return <Suspense fallback={<div className="min-h-screen bg-white px-5 py-24 text-center text-sm text-slate-500">Loading the edit…</div>}><Switch>
    <Route path="/" component={Home} />
    <Route path="/shop" component={Shop} />
    <Route path="/products/:id" component={ProductDetail} />
    <Route path="/cart" component={Cart} />
    <Route path="/wishlist" component={Wishlist} />
    <Route path="/account" component={Account} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch></Suspense>;
}

function App() {
  return <ErrorBoundary>
    <ThemeProvider defaultTheme="light">
      <StorefrontProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </StorefrontProvider>
    </ThemeProvider>
  </ErrorBoundary>;
}

export default App;
