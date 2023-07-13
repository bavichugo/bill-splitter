import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LunchDinnerPage from "./pages/LunchDinnerPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// TODO: 
// Fix all console errors
// Add google ads
// Add analytics
// Add delete button on previous expenses
// On previous expenses, extend the component once clicked to show the items, participants, etc
// Change contact page -> to info maybe? -> explains how the app works

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
