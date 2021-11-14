import footerStyles from '@components/Footer.module.scss';

export default function MainContent({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className={footerStyles.paddingBottom}>{children}</div>
    </div>
  );
}
