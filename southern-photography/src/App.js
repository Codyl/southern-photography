import "./App.css";
import { useLocation } from "react-router-dom";
import "@stripe/stripe-js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
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

const AnimatedSwitch = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={main}>
      <CSSTransition
        key={location.pathname}
        timeout={2000}
        classNames="page"
        unmountOnExit
      >
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route
              exact
              key={path}
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
  return (
    <BrowserRouter>
      <Header />
      <div style={{ height: "9vh" }}></div>
      {/* <SocialMedia/> */}
      <div className="App">
        <AnimatedSwitch />
      </div>
    </BrowserRouter>
  );
}

export default App;
