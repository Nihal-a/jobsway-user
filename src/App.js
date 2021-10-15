import Landing from "./pages/Landing";
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
    </Router>
  );
}

export default App;
