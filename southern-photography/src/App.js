import "./App.css";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/AboutComponent";
import Contact from "./components/ContactComponent";
import Investments from "./components/InvestmentsComponent";
import Wedding from "./components/WeddingComponent";
import Portfolio from "./components/PortfolioComponent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <SocialMedia/> */}
      <div className="App">
        {/* <div style={{height: '40px'}}></div> */}
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/investments" component={Investments} />
          <Route exact path="/wedding" component={Wedding} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
