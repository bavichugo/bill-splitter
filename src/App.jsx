import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LunchDinnerPage from "./pages/LunchDinnerPage";
import InfoPage from "./pages/InfoPage";
import NotFoundPage from "./pages/NotFoundPage";

// TODO: 
// Add google ads
// Add analytics

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mx-auto container flex justify-center text-sm sm:text-lg">
        <Routes>
          <Route path="/" element={<LunchDinnerPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
