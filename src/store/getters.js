export default {
  getCharacters: (state) => state.characters,
  getCurrentPage: (state) => state.currentPage,
  getTotalPages: (state) => state.totalPages,
  isLoading: (state) => state.loading,
  getError: (state) => state.error,
};
