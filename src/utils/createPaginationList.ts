const createPaginationList = (page: number, length: number) => {
  const out: number[] = [];

  switch (true) {
    case length === 3: {
      return out.concat([2]);
      break;
    }

    case page === length: {
      return out.concat([page - 1]);
      break;
    }

    case length > 3 && page <= 2: {
      return out.concat([2, 3]);
      break;
    }

    case page + 1 === length: {
      return out.concat([page - 1, page]);
      break;
    }

    case page + 2 >= length: {
      return out.concat([page - 1, page, page + 1]);
      break;
    }

    default:
      return out.concat([page - 1, page, page + 1]);
  }
};

export default createPaginationList;
