import ErrorPage from '@components/items/ErrorPage';
import { NextPage } from 'next';

const Error500Page: NextPage = () => (
  <ErrorPage code={500} message="Something went wrong on the server" />
);

export default Error500Page;
