
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      {/* <NavBar/> */}
      <Switch>
        <Route exact path ="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
