import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <Router>
      <div className="container">

          <Header onAddButton={() => setShowAddTask(!showAddTask)} showAddStat={showAddTask} />          

          <Routes>
              <Route exact path="/" element={<Home showAddTask={showAddTask} />} />

              <Route exact path="/terms" element={<Terms />} />
              <Route exact path="/privacy" element={<Privacy />} />
          </Routes>
          
          <Footer />
      </div>
    </Router>
  );
}

export default App;
