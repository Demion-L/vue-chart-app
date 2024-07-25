<template>
  <v-container class="custom-background">
    <loading-error-handler
      :is-loading="isLoading"
      :error="error"
      :is-empty="!characters.length"
    >
      <h1 class="primary--text text-center my-5 shadowed-text">
        Star Wars Characters
      </h1>

      <pagination-control
        v-if="characters && characters.length"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="onPageChange"
      ></pagination-control>

      <selected-characters-panel @compare="handleCompare" />

      <v-row v-if="characters && characters.length">
        <v-col
          v-for="character in characters"
          :key="character.name"
          cols="12"
          sm="6"
          md="4"
        >
          <character-card
            :character="character"
            :isSelected="isCharacterSelected(character.name)"
            @click.native="toggleSelection(character)"
          />
        </v-col>
      </v-row>
    </loading-error-handler>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CharacterCard from "@/components/CharacterCard.vue";
import SelectedCharactersPanel from "@/components/SelectedCharactersPanel.vue";
import LoadingErrorHandler from "@/components/LoadingErrorHandler.vue";
import PaginationControl from "@/components/PaginationControl.vue";

export default {
  name: "HomeView",
  components: {
    CharacterCard,
    SelectedCharactersPanel,
    LoadingErrorHandler,
    PaginationControl,
  },
  computed: {
    ...mapGetters([
      "getCharacters",
      "getSelectedCharacters",
      "isCharacterSelected",
      "getCurrentPage",
      "getTotalPages",
      "isLoading",
      "getError",
    ]),
    characters() {
      return this.getCharacters || [];
    },
    selectedCharacters() {
      console.log("selected", this.getSelectedCharacters);

      return this.getSelectedCharacters;
    },
    currentPage: {
      get() {
        return this.getCurrentPage;
      },
      set(value) {
        this.fetchCharacters(value);
      },
    },
    totalPages() {
      return this.getTotalPages;
    },
    error() {
      return this.getError;
    },
  },
  created() {
    this.fetchCharacters();
  },

  methods: {
    ...mapActions(["fetchCharacters", "toggleCharacterSelection"]),
    onPageChange(page) {
      this.fetchCharacters(page);
    },
    toggleSelection(character) {
      this.toggleCharacterSelection(character);
    },
    handleCompare(characters) {
      console.log("Handling comparison in HomeView:", characters);
    },
  },
};
</script>
<style scoped>
.custom-background {
  background: rgb(38, 249, 87);
  background: linear-gradient(
    128deg,
    rgba(38, 249, 87, 1) 0%,
    rgba(134, 187, 232, 1) 47%,
    rgba(189, 25, 25, 1) 98%
  );
}

.shadowed-text {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
