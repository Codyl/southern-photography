import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import Investments from './components/InvestmentsComponent';
import Wedding from './components/WeddingComponent';
import Portfolio from './components/PortfolioComponent';
import SocialMedia from './components/SocialMediaComponent';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        {/* <SocialMedia/> */}
      <div className="App">
        {/* <div style={{height: '40px'}}></div> */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/investments' component={Investments}/>
          <Route exact path='/wedding' component={Wedding}/>
          <Route exact path='/portfolio' component={Portfolio}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
