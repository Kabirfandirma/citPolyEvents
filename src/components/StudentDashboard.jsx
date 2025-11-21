import EventCard from "./EventCard";

const StudentDashboard = ({ goToAdmin }) => {
  const events = JSON.parse(localStorage.getItem("events")) || [];

  return (
    <div className="bg-school bg-cover bg-center min-h-screen p-8 backdrop-blur-sm">
      {/* Header with Admin Login button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-3xl font-bold">
          Upcoming School Events
        </h1>

        <button
          onClick={goToAdmin}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
        >
          Admin Login
        </button>
      </div>

      {/* Events Section */}
      <div className="flex flex-wrap gap-4">
        {events.length === 0 ? (
          <p className="text-white">No upcoming events.</p>
        ) : (
          events.map((event, index) => <EventCard key={index} event={event} />)
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
