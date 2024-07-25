<template>
  <v-container class="fill-height align-center justify-center">
    <h1 v-if="hasEnoughCharacters" class="mb-4 primary--text shadowed-text">
      Dashboard
    </h1>
    <v-alert v-if="!hasEnoughCharacters" type="warning">
      Please select at least two characters from the
      <v-btn text color="primary" @click="goToHome">home page</v-btn>.
    </v-alert>
    <template v-else>
      <selected-characters-list />
      <character-comparsion-chart />
    </template>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import SelectedCharactersList from "@/components/SelectedCharactersList.vue";
import CharacterComparsionChart from "@/components/CharacterComparsionChart.vue";

export default {
  name: "DashboardView",
  components: {
    SelectedCharactersList,
    CharacterComparsionChart,
  },
  computed: {
    ...mapGetters(["getSelectedCharacters"]),
    hasEnoughCharacters() {
      return this.getSelectedCharacters.length >= 2;
    },
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
