import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState("");
  const [ticketCount, setTicketCount] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedTicket) {
      const ticketData = { selectedTicket, ticketCount };
      localStorage.setItem("ticketData", JSON.stringify(ticketData));

      navigate("/attendee-details");
    } else {
      alert("Please select a ticket type.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05252C] text-white p-4">
      <div className="bg-[#05252C] border border-[#197686] p-6 rounded-xl shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Ticket Selection</h2>
          <span className="text-sm">Step 1/3</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div
            className="bg-[#197686] h-2 rounded-full"
            style={{ width: "33%" }}
          ></div>
        </div>

        <div className="border-[#197686] border bg-[#08252B] p-4 rounded-lg">
          <div
            className="border bg-[#07373F] border-[#197686] p-4 rounded-lg mb-4 text-center"
            style={{
              background: `radial-gradient(
      103.64% 57.39% at 14.02% 32.06%,
      rgba(36, 160, 181, 0.2) 0%,
      rgba(36, 160, 181, 0) 100%
    ), rgba(10, 12, 17, 0.1)`,
            }}
          >
            <h3 className="text-3xl font-semibold">Techember Fest &apos;25</h3>
            <p className="text-base">
              Join us for an unforgettable experience at
            </p>
            <p className="text-base">[Event Name] Secure your spot now.</p>
            <p className="text-base mt-1">
              📍[Event Location] || March 15, 2025 | 7:00 PM
            </p>
          </div>

          <hr className="text-[#07373F] h-1 mb-3" />

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Select Ticket Type:</h4>
            <div
              className="flex flex-col md:flex-row w-full justify-between gap-2 p-1.5  border border-[#197686] rounded-lg"
              style={{
                background: `radial-gradient(
      103.64% 57.39% at 14.02% 32.06%,
      rgba(36, 160, 181, 0.2) 0%,
      rgba(36, 160, 181, 0) 100%
    ), rgba(10, 12, 17, 0.1)`,
              }}
            >
              {["REGULAR", "VIP", "VVIP"].map((type, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTicket(type)}
                  className={`p-4 w-full md:w-[10rem] h-[6rem] rounded-lg border flex flex-col justify-between text-nowrap ${
                    selectedTicket === type
                      ? "bg-[#197686] border-[#2BA4B9]"
                      : "bg-[#07373F] border-[#0E464F]"
                  }`}
                >
                  <span className="text-lg font-semibold">
                    {type === "REGULAR" ? "Free" : "$150"}
                  </span>
                  <p className="text-sm">{type} ACCESS</p>
                  <span className="text-xs text-gray-300">20/52</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Number of Tickets:</label>
            <select
              className="w-full p-2 rounded bg-[#08252B] border border-[#197686] focus:outline-none"
              value={ticketCount}
              onChange={(e) => setTicketCount(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-col sm:flex sm:flex-row bg-[#05252C]  py-3 sm:py-0 rounded-2xl justify-between gap-4 mt-4 sm:h-14 h-24 space-y-2 sm:space-y-0 items-center">
            <button
              onClick={handleNext}
              className="w-full p-2 bg-[#088da5] md:order-2 text-white rounded-lg hover:bg-[#0A3A45] transition"
            >
              Next
            </button>
            <button className="w-full p-2 border md:order-1  border-[#008b8b] text-[#008b8b] rounded-lg hover:bg-white/10 transition">
              <a href="/"> Cancel</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
