const createSearch = (text: string, params: string): string => {
  const url = new URL(
    `https://test-front.framework.team/${window.location.search}`
  );
  url.searchParams.set(params, text);
  window.history.pushState({}, '', url.search);
  return url.search;
};

export default createSearch;
