export default function ProgressBar({ value, max }) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      >
        <span className="sr-only">{percentage}% Complete</span>
      </div>
    </div>
  );
}
