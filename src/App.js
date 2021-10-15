import Landing from "./pages/Landing";
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/">
        <Landing/>
      </Route>
    </Router>
  );
}

export default App;
