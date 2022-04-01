import "./App.css";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/AboutComponent";
import Contact from "./components/ContactComponent";
import Investments from "./components/InvestmentsComponent";
import Wedding from "./components/WeddingComponent";
import Portfolio from "./components/PortfolioComponent";
import Service from "./components/ServicePage";
import Booking from "./components/BookingComponent";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const main = styled.main``;

const routes = [
  { path: "/", name: "home", Component: Home },
  { path: "/about", name: "about", Component: About },
  { path: "/contact", name: "contact", Component: Contact },
  { path: "/investments", name: "investments", Component: Investments },
  { path: "/wedding", name: "wedding", Component: Wedding },
  { path: "/portfolio", name: "portfolio", Component: Portfolio },
  { path: "/services/:id", name: "service", Component: Service },
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
      <div style={{ height: "10vh" }}></div>
      {/* <SocialMedia/> */}
      <div className="App">
        <AnimatedSwitch />
      </div>
    </BrowserRouter>
  );
}

export default App;
