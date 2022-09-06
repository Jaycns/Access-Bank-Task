import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import App from "./App";
import Apis from "./pages/apis";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="apis" element={<Apis />} />
        </Routes>
      </Layout>
    </Router>
  );
}
