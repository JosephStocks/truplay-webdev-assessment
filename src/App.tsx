import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { buildTitle } from "./utils";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="settings" element={<Settings />} />

      {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const titlePrefix = "TruPlay";

const Home = () => {
  useEffect(() => {
    document.title = titlePrefix;
  }, []);

  return <div>Home</div>;
};

const About = () => {
  useEffect(() => {
    document.title = buildTitle("About");
  }, []);

  return <div>About</div>;
};

const NotFound = () => {
  useEffect(() => {
    document.title = buildTitle("404 Not Found");
  }, []);

  return <h1>404 | Not Found</h1>;
};

export default App;
