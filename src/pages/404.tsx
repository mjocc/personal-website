import ErrorPage from '@components/items/ErrorPage';
import { NextPage } from 'next';

const Error404Page: NextPage = () => (
  <ErrorPage code={404} message="This page could not be found" />
);

export default Error404Page;
