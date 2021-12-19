import utils from '@styles/Utilities.module.scss';

export default function MainContent({ className = '', children }) {
  return (
    <>
      <div
        className={`relative ${utils.heightVisibleScreen} ${
          className || 'bg-zinc-800'
        }`}
      >
        {children}
      </div>
    </>
  );
}
