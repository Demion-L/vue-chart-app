<template>
  <v-container class="primary rounded my-10">
    <p class="font-weight-bold">
      Description:
      <span class="text-sm-body-2">
        please choose up to 4 characters to compare the characteristics.
      </span>
    </p>

    <h3>Selected Characters ({{ selectedCharacters.length }}/4):</h3>

    <div>
      <v-chip
        v-for="char in selectedCharacters"
        :key="char.name"
        class="ma-2"
        close
        @click:close="removeCharacter(char)"
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SelectedCharactersPanel",
  computed: {
    ...mapGetters(["getSelectedCharacters"]),
    selectedCharacters() {
      return this.getSelectedCharacters;
    },
  },
  methods: {
    ...mapActions(["toggleCharacterSelection"]),
    removeCharacter(character) {
      this.toggleCharacterSelection(character);
    },
    compareCharacters() {
      // this.$emit("compare", this.selectedCharacters);
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>
