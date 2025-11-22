import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import EventCard from "./EventCard";

const StudentDashboard = ({ goToAdmin }) => {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Show subtitle after typing effect
  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 2200); // slightly after typing
    return () => clearTimeout(timer);
  }, []);

  // Function to change subtitle color
  const changeSubtitleColor = () => {
    const subtitle = document.querySelector("#subtitle");
    if (subtitle) subtitle.style.color = "#BBC863";
  };

  return (
    <div className="relative bg-school bg-cover bg-center min-h-screen flex flex-col justify-between">
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/10"></div>

      {/* Welcome Header */}
      <header className="relative p-6 sm:p-12 backdrop-blur-sm bg-black bg-opacity-40 text-center flex flex-col items-center">
        {/* Logo */}
        <img
          src="/logo192.png"
          alt="School Logo"
          className="w-20 h-20 object-contain drop-shadow-xl mb-4"
        />

        {/* Typing Title */}
        <h1 className="text-4xl text-white sm:text-5xl font-bold drop-shadow-lg mb-4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to Citi Polytechnic Events")
                .pauseFor(500)
                .deleteAll()
                .typeString("Welcome to Citi Polytechnic Events")
                .callFunction(() => {
                  const span = document.querySelector("h1 span");
                  if (span) span.style.color = "#BBC863";
                  // also change subtitle color
                  changeSubtitleColor();
                })
                .start();
            }}
            options={{
              autoStart: true,
              delay: 70,
              cursor: "|",
            }}
          />
        </h1>

        {/* Subtitle with fade + slide-up animation */}
        <p
          id="subtitle"
          className={`text-white text-lg sm:text-xl max-w-2xl drop-shadow-md transition-all duration-1000 ${
            showSubtitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Stay updated with all upcoming school events and activities. Check
          back often to not miss anything exciting!
        </p>
      </header>

      {/* Events Section */}
      <main className="relative p-6 sm:p-12 flex-1">
        {events.length === 0 ? (
          <p className="text-white text-center text-lg mt-12">
            No upcoming events.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-5 hover:scale-105 transition-transform duration-300"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Admin Button */}
      <button
        onClick={goToAdmin}
        className="relative sm:p-8 bg-gradient-to-r from-primary to-accent text-white px-5 py-3 rounded-lg shadow-lg hover:from-accent hover:to-primary transition-all duration-300 mx-auto mb-6"
      >
        Admin Login
      </button>

      {/* Footer */}
      <footer className="relative bg-white bg-opacity-80 text-blue text-center py-4 text-sm sm:text-base">
        © {new Date().getFullYear()} Citi Polytechnic Abuja. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default StudentDashboard;
