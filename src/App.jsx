import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TicketSelection from "./components/TicketSelection";
import AttendeeDetails from "./components/AttendeeDetails";
import About from "./pages/About";
import Tickets from "./pages/Tickets";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] bg-[#05252C] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/attendee-details" element={<AttendeeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
