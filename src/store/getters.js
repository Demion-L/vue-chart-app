export default {
  getCharacters: (state) => state.characters,
  getSelectedCharacters: (state) => state.selectedCharacters,
  isCharacterSelected: (state) => (characterName) =>
    state.selectedCharacters.some((char) => char.name === characterName),
  getCurrentPage: (state) => state.currentPage,
  getTotalPages: (state) => state.totalPages,
  isLoading: (state) => state.loading,
  getError: (state) => state.error,
};
