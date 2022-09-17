import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import Main from "../components/trade/main";
import Header from "../components/header/Header";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
