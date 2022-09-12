import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { RouteMap } from "./utils/routeMap";
import { useState, useEffect } from "react";

export default function AppRouter() {
  const [route, setRoute] = useState([]);
  useEffect(() => {
    setRoute(RouteMap);
  }, []);
  console.log(route);
  return (
    <Router>
      <Layout>
        <Routes>
          {route.map((items, index) => (
            <Route path={items.path} element={items.element} key={index} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}
