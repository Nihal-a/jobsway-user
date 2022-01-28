import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Routed from "./Routes";
import "@material-tailwind/react/tailwind.css";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    <Router>
      <Routed/>
    </Router>
    </>
  );
}

export default App;
