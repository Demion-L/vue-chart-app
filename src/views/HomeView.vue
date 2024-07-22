<template>
  <v-container class="custom-background">
    <h1 class="primary--text text-center my-5 shadowed-text">
      Star Wars Characters
    </h1>
    <v-row justify="center" v-if="characters && characters.length">
      <v-col cols="auto">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          @input="onPageChange"
          :total-visible="7"
        ></v-pagination>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-container class="primary rounded">
          <p class="font-weight-bold secondary--text">
            Description:
            <span class="text-sm-body-2">
              please choose up to 4 characters to compare the
              characteristics.</span
            >
          </p>

          <h3 class="secondary--text">
            Selected Characters ({{ selectedCharacters.length }}/4):
          </h3>
          <div>
            <v-chip
              v-for="char in selectedCharacters"
              :key="char.name"
              class="ma-2"
              close
              @click:close="toggleSelection(char)"
            >
              {{ char.name }}
            </v-chip>
          </div>

          <v-btn
            v-if="selectedCharacters.length >= 2"
            color="primary secondary--text"
            class="mt-3"
            @click="compareCharacters"
          >
            Compare Characters
          </v-btn>
        </v-container>
      </v-col>
    </v-row>

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

    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <v-alert v-else-if="error" type="error">{{ error }}</v-alert>
    <v-alert v-else-if="!characters.length" type="info"
      >No characters available.</v-alert
    >
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CharacterCard from "@/components/CharacterCard.vue";

export default {
  name: "HomeView",
  components: {
    CharacterCard,
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
    compareCharacters() {
      // This method will be implemented in the new component
      console.log("Comparing characters:", this.selectedCharacters);
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
