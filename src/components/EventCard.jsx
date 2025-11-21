import { useEffect, useState } from "react";

const EventCard = ({ event }) => {
  const { title, description, date } = event;

  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const today = new Date();
    const eventDate = new Date(date);
    const diff = eventDate - today;
    setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [date]);

  return (
    <div className="w-90 bg-blue-500/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-5 transition transform hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30">
      {/* Countdown Badge */}
      <div className="flex justify-end">
        <span className="bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
          {daysLeft > 0 ? `${daysLeft} days left` : "Today"}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-black text-xl font-bold mt-2">{title}</h2>

      {/* Description */}
      <p className="text-blue-900/90 mt-2 text-sm leading-relaxed">
        {description}
      </p>

      {/* Date */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-accent font-semibold text-sm">
          {new Date(date).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
