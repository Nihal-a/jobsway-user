import { useState } from "react";
import Landing from "./pages/Landing";
import "./App.css";
import { BrowserRouter as Router, Route ,Redirect} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { useHistory } from "react-router-dom";

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


  return (
    <Router>
      <Route exact path="/">
        <Landing />
      </Route>
     <Route path="/signup">
        {user ? <Redirect to="/" /> : <Signup />}
      </Route> 
      <Route path="/signin">
        {user ? <Redirect to="/" /> : <Signin />}
      </Route>
    </Router>
  );
}

export default App;
