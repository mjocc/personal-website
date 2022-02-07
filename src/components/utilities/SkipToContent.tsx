import { FC } from 'react';

interface SkipToContentProps {}

const SkipToContent: FC<SkipToContentProps> = () => (
  <div className="fixed top-0 z-50 p-3 text-white transition-transform duration-300 -translate-y-full border left-1/2 rounded-b-xl border-zinc-900 bg-zinc-800 focus-within:-translate-y-1">
    <a className="underline utils__replace-focus-ring" href="#main">
      Skip to content
    </a>
  </div>
);

export default SkipToContent;
