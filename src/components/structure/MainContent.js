export default function MainContent({ className = '', children }) {
  return (
    <>
      <div className={`utils__visible-screen-height relative ${className}`}>
        {children}
      </div>
    </>
  );
}
