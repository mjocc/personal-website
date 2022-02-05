import { FC } from 'react';

interface SkipToContentProps {}

const SkipToContent: FC<SkipToContentProps> = () => (
  <>
    <div className="absolute z-50 p-3 text-white transition-transform duration-300 -translate-y-full border rounded-b-xl border-zinc-900 left-1/2 bg-zinc-800 focus-within:-translate-y-1">
      <a className="underline" href="#main">
        Skip to content
      </a>
    </div>
  </>
);

export default SkipToContent;
