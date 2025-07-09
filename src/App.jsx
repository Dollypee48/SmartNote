import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Summarizer from "./pages/Summarizer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summarize" element={<Summarizer />} />
      </Routes>
    </Router>
  );
}

export default App;
