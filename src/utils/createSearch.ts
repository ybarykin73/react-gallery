const createSearch = (text: string | number, params: string): string => {
  const url = new URL(
    `https://test-front.framework.team/${window.location.search}`
  );
  url.searchParams.set(params, String(text));
  window.history.pushState({}, '', url.search);
  return url.search;
};

export default createSearch;
