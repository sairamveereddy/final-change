import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import LICPlans from "./pages/LICPlans";
import InsurancePlans from "./pages/InsurancePlans";
import PlanDetail from "./pages/PlanDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lic-plans" element={<LICPlans />} />
          <Route path="/insurance-plans" element={<InsurancePlans />} />
          <Route path="/plan/:id" element={<PlanDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
