import PaginationView from './PaginationView';

const Pagination = () => {
  const length = Math.ceil(32 / 6);
  return <PaginationView length={length} />;
};

export default Pagination;
