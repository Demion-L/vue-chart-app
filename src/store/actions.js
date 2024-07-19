import axios from "axios";

export default {
  async fetchCharacter({ commit }) {
    commit("SET_LOADING", true);
    try {
      const response = await axios.get("https://swapi.dev/api/people/1/");
      commit("SET_CHARACTER", response.data);
      commit("SET_ERROR", null);
    } catch (error) {
      console.error("Error fetching character:", error);
      commit("SET_ERROR", "Failed to fetch character data");
    } finally {
      commit("SET_LOADING", false);
    }
  },
};
