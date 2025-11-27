// components/Projects/EmptyState.jsx
const EmptyState = ({ darkMode }) => (
  <div className="text-center py-16">
    <div className="text-8xl mb-6 animate-bounce">🔍</div>
    <h3
      className={`text-2xl font-bold mb-4 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      No projects found
    </h3>
    <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
      Try selecting a different filter to see more projects.
    </p>
  </div>
);

export default EmptyState;
