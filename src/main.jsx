import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaymentProcess from "./OurComponents/Payments/PaymentProcess.jsx";
import Dashboard from "./OurComponents/Dashboard/Dashboard.jsx";
import SubscriptionSelection from "./OurComponents/Subscribtion Selection/SubscriptionSelection.jsx";
import SubscribingPage from "./OurComponents/Subscribtion Selection/SubscribingPage.jsx";
import LandingPage from "./OurComponents/LandingPage/LandingPage.jsx";
import FeaturesPage from "./OurComponents/Features/FeaturesPage.jsx";
import PricingPage from "./OurComponents/Pricing/Pricing.jsx";
import FAQ from "./OurComponents/FAQ/FAQ.jsx";
import ContactUs from "./OurComponents/Contact/ContactUs.jsx";
import AboutUs from "./OurComponents/Aboutus/AboutUs.jsx";
import TermAndConditions from "./OurComponents/Term and Conditions/TermAndConditions.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/features",
        element: <FeaturesPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/SubscriptionSelection",
        element: <SubscriptionSelection />,
      },
      {
        path: "/PaymentProcess",
        element: <PaymentProcess />,
      },
      {
        path: "/SubscribingPage",
        element: <SubscribingPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/terms&Conditions",
        element: <TermAndConditions />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
