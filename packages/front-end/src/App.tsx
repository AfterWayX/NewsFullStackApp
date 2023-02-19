import HomePage from "./pages/HomePage";
// @ts-ignore
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import AboutPage from "./pages/AboutPage";
import JobsPage from "./pages/JobsPage";
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
