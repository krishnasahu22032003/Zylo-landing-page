// components/NotificationPill.jsx
import React from 'react';

const NotificationPill = ({ message = "🚀 AI Upgrade Deployed" }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-white 
        bg-white/5 border border-white/10 backdrop-blur-lg shadow-md 
        hover:bg-white/10 transition-all cursor-pointer"
        title="Click to view update"
        onClick={() => alert(message)}
      >
        {/* Ping Indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>

        {/* Message */}
        <span className="tracking-tight">{message}</span>
      </div>
    </div>
  );
};

export default NotificationPill;
