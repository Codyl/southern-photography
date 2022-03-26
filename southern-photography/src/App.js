import { useState } from "react";
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

function App() {
  const [service, setService] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <div style={{ height: "10vh" }}></div>
      {/* <SocialMedia/> */}
      <div className="App">
        {/* <div style={{height: '40px'}}></div> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/investments"
            element={<Investments setService={setService} />}
          />
          <Route
            exact
            path="/wedding"
            element={<Wedding setService={setService} />}
          />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/book-now" element={<Booking />} />
          <Route path="/services/:id" element={<Service service={service} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
