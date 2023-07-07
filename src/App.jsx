import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LunchDinnerPage from "./pages/LunchDinnerPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mx-auto container flex justify-center">
        <Routes>
          <Route path="/" element={<LunchDinnerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
