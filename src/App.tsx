import { Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { useTitle } from "./utils";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="settings" element={<Settings />} />

      {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const NotFound = () => {
  useTitle("404 - Not Found");

  return <h1>404 | Not Found</h1>;
};

export default App;
