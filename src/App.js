import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Routed from "./Routes";
import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <Router>
      <Routed/>
    </Router>
  );
}

export default App;
