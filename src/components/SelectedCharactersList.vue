<template>
  <v-container>
    <h2 class="mb-4">Selected Characters</h2>
    <v-list v-if="selectedCharacters.length">
      <v-list-item
        v-for="character in selectedCharacters"
        :key="character.name"
      >
        <v-list-item-content>
          <v-list-item-title>{{ character.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Mass: {{ character.mass }}, Height: {{ character.height }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-alert v-else type="info">
      No characters selected. Please select characters from the main page.
    </v-alert>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectedCharactersList",
  computed: {
    ...mapGetters(["getSelectedCharacters"]),
    selectedCharacters() {
      return this.getSelectedCharacters;
    },
  },
};
</script>
