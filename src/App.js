// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// Pages Imports
import CarPage from "./pages/HomePage/CarPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import BookDetailsPage from "./components/BookDetailsPage/BookDetailsPage";
import FavoritePage from "./components/FavoritesPage/FavoritesPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/book/:bookId/"
          element={
            <PrivateRoute>
              <BookDetailsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddCarPage />
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Maybe this car should be wrapped around privateRoute tags */}
        <Route path="/cars" element={<CarPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
