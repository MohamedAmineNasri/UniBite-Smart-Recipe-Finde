import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="flex">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <img src="/LoadingGif.gif" alt="Loading" />
        </div>
      ) : (
        <>
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
