import "./App.css";
import "@stripe/stripe-js";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import Header from "./components/HeaderComponent";
import Home from "./components/home/HomeComponent";
import About from "./components/about/AboutComponent";
import Contact from "./components/contact/ContactComponent";
import Investments from "./components/products/InvestmentsComponent";
import Wedding from "./components/products/WeddingComponent";
import Portfolio from "./components/portfolio/PortfolioComponent";
import Service from "./components/products/ServicePage";
import Booking from "./components/booking/BookingComponent";
import Cancel from "./components/booking/CancelComponent";
import Success from "./components/booking/SuccessComponent";
import Footer from "./components/FooterComponent";
import { setClassForActiveTab } from "./shared/activeTab";

const main = styled.main``;

const routes = [
  { path: "/", name: "home", Component: Home },
  { path: "/about", name: "about", Component: About },
  { path: "/contact", name: "contact", Component: Contact },
  { path: "/investments", name: "investments", Component: Investments },
  { path: "/wedding", name: "wedding", Component: Wedding },
  { path: "/portfolio", name: "portfolio", Component: Portfolio },
  { path: "/portfolio/:id", name: "portfolio", Component: Portfolio },
  { path: "/services/:id", name: "service", Component: Service },
  { path: "/book-session/:id", name: "book-now", Component: Booking },
  { path: "/book-session/cancel", name: "cancel", Component: Cancel },
  { path: "/book-session/success", name: "success", Component: Success },
];

const tabs = [
  { name: "home", path: "" },
  { name: "about", path: "about" },
  { name: "wedding", path: "wedding" },
  { name: "portfolio", path: "portfolio" },
  { name: "investments", path: "investments" },
  { name: "contact", path: "contact" },
];

const AnimatedSwitch = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={main}>
      <CSSTransition
        key={location.pathname}
        timeout={200}
        classNames="page"
        unmountOnExit
      >
        <Routes>
          {routes.map(({ path, Component, name }) => (
            <Route
              exact
              key={name}
              path={path}
              element={<Component className="page" />}
            />
          ))}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  let path = window.location.pathname;
  path = path.replace("/", "");
  const [activeTab, setActiveTab] = useState(path);

  useEffect(() => {
    setClassForActiveTab(activeTab);
  }, [activeTab]);

  return (
    <BrowserRouter>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <div style={{ height: "9vh" }}></div>
      <div className="App content">
        <AnimatedSwitch />
      </div>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
    </BrowserRouter>
  );
}

export default App;
