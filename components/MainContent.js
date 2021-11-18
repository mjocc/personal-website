import utils from '@styles/Utilities.module.scss';

export default function MainContent({ className = '', children }) {
  return (
    <>
      <div
        className={`relative overflow-hidden ${utils.heightVisibleScreen} ${
          className || 'bg-gray-800'
        }`}
      >
        {children}
      </div>
    </>
  );
}
