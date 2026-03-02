export default function LessonCard({ title, subject, grade, isPremium }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">Subject: {subject}</p>
      <p className="text-gray-600 mb-2">Grade: {grade}</p>
      {isPremium && (
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
          Premium
        </span>
      )}
    </div>
  );
}
