import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Form from "./Components/Form";
import Info from "./Components/Info";
import Print from "./Components/Print";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/'>
           <Form></Form>
        </Route>
        <Route exact path='/Info/:id'>
           <Info></Info>
        </Route>
        <Route exact path='/print/:id'>
           <Print></Print>
        </Route>

      </Switch>
         
      </Router>
    </div>
  );
}

export default App;
