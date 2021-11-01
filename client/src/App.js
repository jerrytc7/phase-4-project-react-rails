import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Teachers from "./components/Teachers"
import Students from "./components/Students"
import NewStudentForm from "./components/NewStudentForm"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/students" component={Students} />
        <Route exact path ="/teachers" component={Teachers} />
        <Route exact path ="/students/new" component={NewStudentForm} />
      </Switch>
    </Router>
  );
}

export default App;
