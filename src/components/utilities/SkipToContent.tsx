import { FC } from 'react';

interface SkipToContentProps {}

const SkipToContent: FC<SkipToContentProps> = () => (
  <>
    <div className="fixed top-0 left-1/2 z-50 -translate-y-full rounded-b-xl border border-zinc-900 bg-zinc-800 p-3 text-white transition-transform duration-300 focus-within:-translate-y-1">
      <a className="utils__replace-focus-ring underline" href="#main">
        Skip to content
      </a>
    </div>
  </>
);

export default SkipToContent;
