export default {
  SET_CHARACTERS(state, { page, characters }) {
    state.characters = characters;
    state.cache[page] = characters;
  },
  ADD_SELECTED_CHARACTER(state, character) {
    if (state.selectedCharacters.length < 4) {
      state.selectedCharacters.push(character);
    }
  },
  REMOVE_SELECTED_CHARACTER(state, characterName) {
    state.selectedCharacters = state.selectedCharacters.filter(
      (char) => char.name !== characterName
    );
  },
  CLEAR_SELECTED_CHARACTERS(state) {
    state.selectedCharacters = [];
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
