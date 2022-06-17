const filters = {
  searchText: "",
  sortBy: "byEdited",
};

const getFilters = () => filters;

const setFilters = (updatesFilter) => {
  if (typeof updatesFilter.searchText === "string") {
    filters.searchText = updatesFilter.searchText;
  }
  if (typeof updatesFilter.sortBy === "string") {
    filters.sortBy = updatesFilter.sortBy;
  }
};
export { getFilters, setFilters };
