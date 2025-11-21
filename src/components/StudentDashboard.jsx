import EventCard from "./EventCard";

const StudentDashboard = ({ goToAdmin }) => {
  const events = JSON.parse(localStorage.getItem("events")) || [];

  return (
    <div className="bg-school bg-cover bg-center min-h-screen flex flex-col justify-between">
      {/* Welcome Header */}
      <header className="p-6 sm:p-12 backdrop-blur-sm bg-black bg-opacity-40">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-white text-4xl sm:text-5xl font-bold drop-shadow-lg mb-4 sm:mb-0">
            Welcome to Citi Polytechnic Events
          </h1>
        </div>
        <p className="text-white text-lg sm:text-xl max-w-2xl drop-shadow-md">
          Stay updated with all upcoming school events and activities. Check
          back often to not miss anything exciting!
        </p>
      </header>

      {/* Events Section */}
      <main className="p-6 sm:p-12 flex-1">
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

      <button
        onClick={goToAdmin}
        className=" p-99 sm:p-8 bg-gradient-to-r from-primary to-accent text-white px-5 py-3 rounded-lg shadow-lg hover:from-accent hover:to-primary transition-all duration-300"
      >
        Admin Login
      </button>

      {/* Footer */}
      <footer className="bg-white bg-opacity-80 text-blue text-center py-4 text-sm sm:text-base">
        © {new Date().getFullYear()} Citi Polytechnic Abuja. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default StudentDashboard;
