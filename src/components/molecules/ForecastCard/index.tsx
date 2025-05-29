import { ChevronDown, ChevronUp } from "lucide-react";

interface ForecastDayCardProps {
  day: any;
  expanded: boolean;
  onToggle: () => void;
}

const ForecastCard = ({ day, expanded, onToggle }: ForecastDayCardProps) => {
  let gradientClass = "bg-gradient-to-br from-blue-100 to-blue-50"; // default

  if (day.day.maxtemp_c >= 35) {
    gradientClass = "bg-gradient-to-br from-red-400 to-orange-200";
  } else if (day.day.maxtemp_c >= 30) {
    gradientClass = "bg-gradient-to-br from-orange-300 to-yellow-100";
  } else if (day.day.maxtemp_c >= 25) {
    gradientClass = "bg-gradient-to-br from-yellow-200 to-yellow-50";
  } else if (day.day.maxtemp_c >= 18) {
    gradientClass = "bg-gradient-to-br from-green-100 to-green-50";
  } else {
    gradientClass = "bg-gradient-to-br from-blue-200 to-blue-100";
  }

  return (
    <div
      className={`border border-gray-200 rounded-xl shadow-sm mb-4 ${gradientClass}`}
    >
      {/* Header row */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <img
            src={day.day.condition.icon}
            alt={day.day.condition.text}
            className="w-10 h-10"
          />
          <div>
            <h3 className="text-lg font-semibold">{day.date}</h3>
            <p className="text-sm text-gray-500">{day.day.condition.text}</p>
          </div>
        </div>
        <div className="text-sm text-right">
          <p>High: {day.day.maxtemp_c}°C</p>
          <p>Low: {day.day.mintemp_c}°C</p>
        </div>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </div>

      {/* Expandable content */}
      {expanded && (
        <div className="bg-white/70 rounded-b-xl p-4 transition-all">
          <h4 className="text-sm font-medium mb-2">Hourly Forecast</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {day.hour.map((hour: any, idx: any) => (
              <div
                key={idx}
                className="flex flex-col items-center p-2 border rounded-lg bg-white/80 shadow-sm"
              >
                <p className="text-xs font-medium">{hour.time.split(" ")[1]}</p>
                <img
                  src={hour.condition.icon}
                  alt={hour.condition.text}
                  className="w-6 h-6"
                />
                <p className="text-sm">{hour.temp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ForecastCard;
