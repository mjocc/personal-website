export default function MainContent({ className, children }) {
  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        className || "bg-gray-800"
      }`}
    >
      {children}
    </div>
  );
}
