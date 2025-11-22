import { useState } from "react";
import EventCard from "./EventCard";
import Swal from "sweetalert2";

const AdminDashboard = ({ onLogout }) => {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  // Add Event with SweetAlert2
  const addEvent = (e) => {
    e.preventDefault();

    const newEvent = { title, description, date };
    const updatedEvents = [...events, newEvent];

    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    setTitle("");
    setDescription("");
    setDate("");

    Swal.fire({
      title: "Event Added!",
      text: "Your event has been successfully saved.",
      icon: "success",
      confirmButtonColor: "#3085d6",
    });
  };

  // Delete Event with confirmation popup
  const deleteEvent = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This event will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));

        Swal.fire("Deleted!", "The event has been removed.", "success");
      }
    });
  };

  return (
    <div className="relative bg-school bg-cover bg-center min-h-screen flex flex-col justify-between">
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>

      {/* Header */}
      <header className="relative p-8 text-center backdrop-blur-sm bg-black bg-opacity-40">
        <img
          src="/logo192.png"
          alt="School Logo"
          className="w-20 h-20 mx-auto mb-4 drop-shadow-lg"
        />

        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          Welcome Admin
        </h1>

        <button
          onClick={onLogout}
          className="mt-6 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg shadow-lg hover:from-accent hover:to-primary transition-all duration-300"
        >
          Logout
        </button>
      </header>

      {/* Admin Form */}
      <main className="relative flex flex-col items-center p-6 sm:p-12 flex-1">
        <form
          onSubmit={addEvent}
          className="bg-white bg-opacity-90 backdrop-blur-md w-full max-w-xl mx-auto p-6 rounded-2xl shadow-lg flex flex-col gap-4 text-center"
        >
          <h2 className="text-2xl font-bold text-blue mb-2">Add New Event</h2>

          <input
            type="text"
            placeholder="Event Title"
            className="p-3 rounded-lg border text-center"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Event Description"
            className="p-3 rounded-lg border text-center"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <input
            type="date"
            className="p-3 rounded-lg border text-center"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg shadow-lg hover:from-accent hover:to-primary transition-all duration-300"
          >
            Add Event
          </button>
        </form>

        {/* Events List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-5"
            >
              <EventCard event={event} />

              <button
                onClick={() => deleteEvent(index)}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-white bg-opacity-80 text-blue text-center py-4 text-sm sm:text-base">
        © {new Date().getFullYear()} Citi Polytechnic Abuja. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default AdminDashboard;
