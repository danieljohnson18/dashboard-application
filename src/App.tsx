import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/SIdebar";
import { BrowserRouter as Router } from "react-router-dom";
import Expenses from "./pages/Expenses/Expenses";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </>
  );
}

export default App;
