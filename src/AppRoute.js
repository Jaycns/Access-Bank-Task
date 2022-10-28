import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { RouteMap } from "./utils/routeMap";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          {RouteMap.map((items, index) => (
            <Route path={items.path} element={items.element} key={index} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}
