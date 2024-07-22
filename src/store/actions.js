import axios from "axios";

export default {
  async fetchCharacters({ commit, state }, page = 1) {
    if (state.cache[page]) {
      commit("SET_CHARACTERS", { page, characters: state.cache[page] });
      commit("SET_CURRENT_PAGE", page);
      return;
    }

    commit("SET_LOADING", true);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
      );
      commit("SET_CHARACTERS", { page, characters: response.data.results });
      commit("SET_CURRENT_PAGE", page);
      commit("SET_TOTAL_PAGES", Math.ceil(response.data.count / 10)); // Assuming 10 items per page
      commit("SET_ERROR", null);
    } catch (error) {
      console.error("Error fetching characters:", error);
      commit("SET_ERROR", "Failed to fetch character data");
    } finally {
      commit("SET_LOADING", false);
    }
  },

  toggleCharacterSelection({ commit, state }, character) {
    const isSelected = state.selectedCharacters.some(
      (char) => char.name === character.name
    );
    if (isSelected) {
      commit("REMOVE_SELECTED_CHARACTER", character.name);
    } else if (state.selectedCharacters.length < 4) {
      commit("ADD_SELECTED_CHARACTER", character);
    }
  },
};
