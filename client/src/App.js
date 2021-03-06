import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Teachers from "./components/Teachers"
import Students from "./components/Students"
import Home from "./components/Home"
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/students" component={Students} />
        <Route exact path ="/teachers" component={Teachers} />
      </Switch>
    </Router>
  );
}

export default App;
