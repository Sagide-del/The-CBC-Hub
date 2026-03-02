export default function ProjectCard({ title, difficulty, estimatedTime }) {
  const difficultyColors = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800"
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`inline-block text-xs px-2 py-1 rounded mb-2 ${
        difficultyColors[difficulty] || "bg-gray-100 text-gray-800"
      }`}>
        {difficulty}
      </p>
      <p className="text-gray-600">⏱️ {estimatedTime}</p>
    </div>
  );
}
