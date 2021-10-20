import { useState,useEffect } from "react";
import Landing from "./pages/Landing";
import "./App.css";
import { BrowserRouter as Router, Route ,Redirect,Switch} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Landing} />
     <Route path="/signup">
        {user ? <Redirect to="/" /> : <Signup />}
      </Route> 
      <Route path="/signin">
        {user ? <Redirect to="/" /> : <Signin />}
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
