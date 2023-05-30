import "./App.css";
import Navbar from "./components/Header/Navbar";

import RouteApp from "./components/RoutesApp/RouteApp";

function App() {
  return (
    <>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="routeApp">
          <RouteApp />
        </div>
      </div>
    </>
  );
}

export default App;
