import axios from "axios";

export default {
  async fetchCharacters({ commit }, page = 1) {
    commit("SET_LOADING", true);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
      );
      commit("SET_CHARACTERS", response.data.results);
      commit("SET_CURRENT_PAGE", page);
      commit("SET_TOTAL_PAGES", Math.ceil(response.data.count / 10));
      commit("SET_ERROR", null);
    } catch (error) {
      console.error("Error fetching characters:", error);
      commit("SET_ERROR", "Failed to fetch character data");
    } finally {
      commit("SET_LOADING", false);
    }
  },
};
