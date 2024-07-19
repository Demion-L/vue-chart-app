export default {
  SET_CHARACTERS(state, characters) {
    state.characters = characters;
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
  SET_TOTAL_PAGES(state, total) {
    state.totalPages = total;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};
