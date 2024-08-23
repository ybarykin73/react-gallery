const deleteSearch = () => {
  const url = new URL(window.location as any);
  url.searchParams.delete('authorId');
  url.searchParams.delete('locationId');
  url.searchParams.delete('created_gte');
  url.searchParams.delete('created_lte');
  url.searchParams.delete('_page');
  window.history.pushState({}, '', url);
};

export default deleteSearch;
