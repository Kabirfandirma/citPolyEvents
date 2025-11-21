import { useState } from "react";
import EventCard from "./EventCard";

const AdminDashboard = ({ onLogout }) => {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    const newEvent = { title, description, date };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setTitle("");
    setDescription("");
    setDate("");
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <div className="bg-school bg-cover bg-center min-h-screen p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-white text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={onLogout}
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-accent transition"
        >
          Logout
        </button>
      </div>
      <form
        onSubmit={addEvent}
        className="bg-white bg-opacity-90 p-6 rounded mb-6 flex flex-col gap-4 w-96"
      >
        <input
          type="text"
          placeholder="Event Title"
          className="p-2 rounded border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Event Description"
          className="p-2 rounded border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          className="p-2 rounded border"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 rounded hover:bg-secondary transition"
        >
          Add Event
        </button>
      </form>
      <div className="flex flex-wrap gap-4">
        {events.map((event, index) => (
          <div key={index} className="relative">
            <EventCard event={event} />
            <button
              onClick={() => deleteEvent(index)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded hover:bg-red-700"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
