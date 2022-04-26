import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  const path = process.env.PUBLIC_URL
  return (
    <Router>
      <Routes>
        <Route path={`/movie/:id`} element={<Detail />}></Route>
        <Route path={`${path}/`} element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
