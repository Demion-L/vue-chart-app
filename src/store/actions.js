import axios from "axios";

export default {
  async fetchCharacter({ commit }) {
    commit("SET_LOADING", true);

    try {
      const characterPromises = [];

      for (let i = 1; i <= 6; i++) {
        characterPromises.push(axios.get(`https://swapi.dev/api/people/${i}/`));
      }

      const responses = await Promise.all(characterPromises);
      const characters = responses.map((response) => response.data);

      commit("SET_CHARACTERS", characters);
      commit("SET_ERROR", null);
    } catch (error) {
      console.error("Error fetching characters:", error);
      commit("SET_ERROR", "Failed to fetch character data");
    } finally {
      commit("SET_LOADING", false);
    }
  },
};
