const About = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-20 py-6 text-white flex justify-center">
      <div className="border border-[#0E464F] rounded-4xl w-full sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] py-8">
        <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#24A0B5] to-[#1BE7E7]">
            Event Ticket Booking UI
          </h2>
          <p className="text-gray-300 text-base md:text-lg mt-4">
            A sleek and beginner-friendly Conference Ticket Generator UI for
            developers to clone, explore, and enhance. This design ensures a
            seamless ticket reservation experience with an elegant interface.
          </p>

          <div className="mt-10 space-y-8 text-gray-300 text-left">
            <div>
              <h3 className="text-lg font-semibold text-[#24A0B5]">
                Ticket Selection
              </h3>
              <ul className="ml-5 mt-2 space-y-1 list-disc list-inside">
                <li>Browse available tickets (Free & Paid).</li>
                <li>List and card view for ticket display.</li>
                <li>One-click ticket reservation for free tickets.</li>
                <li>Payment modal for purchasing tickets.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#24A0B5]">
                Attendee Details
              </h3>
              <ul className="ml-5 mt-2 space-y-1 list-disc list-inside">
                <li>Input Name, Email, and optional Phone Number.</li>
                <li>Profile picture upload with real-time preview.</li>
                <li>Instant ticket summary before confirmation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#24A0B5]">
                 Tech Stack (React + Tailwind)
              </h3>
              <ul className="ml-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  <span className="text-white font-semibold">
                    TicketSelection.jsx
                  </span>{" "}
                   Displays ticket details
                </li>
                <li>
                  <span className="text-white font-semibold">
                    AttendeeDetails.jsx
                  </span>{" "}
                   Captures user details
                </li>
                <li>
                  <span className="text-white font-semibold">
                    SuccessScreen.jsx
                  </span>{" "}
                   Shows final ticket preview
                </li>
                <li>
                  Profile pictures handled via Local Storage, Cloudinary, or
                  URL.createObjectURL().
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto flex items-center justify-center my-8 px-4 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#24A0B5] to-[#1BE7E7]">
             Enjoy a seamless booking experience! 
          </p>
        </div>

        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            className="rounded-xl border border-[#24A0B5] bg-transparent px-6 sm:px-8 py-3 text-[#24A0B5] text-sm sm:text-base font-medium text-center transition-all duration-300 hover:bg-[#24A0B5] hover:text-white hover:shadow-lg"
            href="https://www.figma.com/community/file/1470800949188681164/event-ticket-booking-ui-open-source-practice-project"
          >
            Figma File
          </a>
          <a
            className="rounded-xl bg-gradient-to-r from-[#24A0B5] to-[#1BE7E7] px-6 sm:px-8 py-3 text-white text-sm sm:text-base font-medium text-center transition-all duration-300 hover:shadow-xl scale-105 hover:scale-110"
            href="https://github.com/realmintech/hngx-stage2-conference-ticket-generator"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
