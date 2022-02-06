import { FC, ReactNode, useState } from 'react';
import Pagination from 'react-paginate';
import chunk from 'lodash/chunk';

interface PaginateProps {
  pageSize: number;
  data: { [key: string]: any }[];
  renderComponent: (componentData: any) => ReactNode;
  className?: string;
}

const Paginate: FC<PaginateProps> = ({
  pageSize,
  data,
  renderComponent,
  className,
}) => {
  const chunks = chunk(data, pageSize);
  const [chunkIndex, setChunkIndex] = useState(0);
  const pageDataComponents = chunks[chunkIndex].map(renderComponent);

  return (
    <>
      <div className={className}>{pageDataComponents}</div>
      {chunks.length > 1 && (
        <div className="utils__flex-center">
          <Pagination
            pageCount={chunks.length}
            onPageChange={({ selected }) => setChunkIndex(selected)}
            containerClassName="relative z-0 inline-flex rounded-md shadow-sm -space-x-px text-white"
            previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-zinc-900 bg-zinc-700 text-sm font-medium border-zinc-900 hover:bg-zinc-800"
            previousLinkClassName="utils__stretched-link"
            previousLabel="Previous"
            pageClassName="bg-zinc-700 border-zinc-900 border-zinc-900 hover:bg-zinc-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            pageLinkClassName="utils__stretched-link"
            activeClassName="z-10 bg-emerald-900 text-emerald-300 hover:bg-emerald-900"
            activeLinkClassName="utils__stretched-link"
            breakClassName="relative inline-flex items-center px-4 py-2 border border-zinc-900 bg-zinc-700 text-sm font-medium text-gray-700"
            breakLinkClassName="utils__stretched-link"
            nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-zinc-900 bg-zinc-700 text-sm font-medium border-zinc-900 hover:bg-zinc-800"
            nextLinkClassName="utils__stretched-link"
            nextLabel="Next"
            disabledClassName="z-10 text-zinc-500 !bg-zinc-800"
            disabledLinkClassName="utils__stretched-link cursor-default"
          />
        </div>
      )}
    </>
  );
};

export default Paginate;
