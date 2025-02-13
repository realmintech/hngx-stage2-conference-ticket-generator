import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";

const Tickets = () => {
  const [attendeeDetails, setAttendeeDetails] = useState(null);
console.log('data', attendeeDetails);

  useEffect(() => {
    const storedData = localStorage.getItem("finalTicketData");
    if (storedData) {
      setAttendeeDetails(JSON.parse(storedData));
    }
  }, []);

  const handleDownloadTicket = () => {
    const ticketElement = document.querySelector(".ticket-container");

    if (ticketElement) {
      html2canvas(ticketElement).then((canvas) => {
        const image = canvas.toDataURL("image/png");

      
        const link = document.createElement("a");
        link.href = image;
        link.download = "ticket.png"; 
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link); 
      });
    }
  };

  if (!attendeeDetails) {
    return <div>Processing...</div>;
  }

  return (
    <div className="relative border-1 border-[#24A0B5] h-[128vh] justify-center mt-10 sm:w-md flex mx-auto rounded-xl">
      <p className="absolute translate-y-8 text-white text-3xl font-bold">
        Your Ticket Is Booked!
      </p>
      <p className="absolute text-xs text-white sm:text-lg translate-y-16">
        Check your email for a copy or you can download
      </p>
      <img className="absolute translate-y-28 " src={assets.ticket} alt="" />
      <div className="ticket-container absolute h-[28.2rem] w-[16.5rem] translate-y-5 rounded-2xl justify-center items-center flex flex-col ">
        <div className="absolute  translate-y-16 border-[#24A0B5] border-3 rounded-xl w-[55%] h-[32.5%]">
          <img
            src={attendeeDetails.profilePhoto}
            alt="Profile"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <div className="absolute translate-y-[15.4rem]  w-[88.5%] h-[36%]">
          <div className=" w-full h-12 flex border-b-2  border-[#008b8b]">
            <div className=" bg-[#08343C] p-1  w-1/2 ">
              <p className="text-[10px] text-white  ">Enter your name</p>
              <p className="text-xs px-1 text-white">{attendeeDetails.name}</p>
            </div>
            <div className="bg-[#08343C] w-1/2 border-l-2 border-[#008b8b] py-1 pl-4">
              <p className="text-[10px] text-white">Enter your email*</p>
              <p className="text-[10px] px-1 text-white">
                {attendeeDetails.email}
              </p>
            </div>
          </div>
          <div className=" w-full h-10 flex border-b-2 border-[#008b8b]">
            <div className="p-1 bg-[#08343C] w-1/2">
              <p className="text-[10px] text-white ">Ticket Type:</p>
              <p className="text-[10px] px-1 text-white">
                {attendeeDetails.selectedTicket}
              </p>
            </div>
            <div className="py-1 pl-4 bg-[#08343C] w-1/2 border-l-2 border-[#008b8b]">
              <p className="text-[10px] text-white ">Ticket for:</p>
              <p className="text-[10px] px-1 text-white">
                {attendeeDetails.ticketCount}
              </p>
            </div>
          </div>
          <div className=" w-full h-[4.3rem]"></div>
        </div>
      </div>
      <div className="absolute translate-y-[38.4rem]  border-black border-2 h-[5rem] w-[16.5rem] ">
        <img className="w-full h-[5rem]" src={assets.barcode} alt="barcode" />
      </div>
      <div className="absolute translate-y-[45rem]  flex flex-col sm:flex-row gap-4 justify-center items-center p-4">
        <Link to={"/"}>
          <button className="px-6 py-3 border-2  border-cyan-500 text-cyan-500 rounded-md hover:bg-cyan-500 hover:text-white transition duration-300">
            Book Another Ticket
          </button>
        </Link>
        <button
          onClick={handleDownloadTicket}
          className="px-6 py-3 bg-cyan-500  text-white rounded-md hover:bg-cyan-600 transition duration-300"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Tickets;






