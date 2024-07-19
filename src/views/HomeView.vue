<template>
  <v-container>
    <h1>Star Wars Characters</h1>
    <v-row v-if="characters.length">
      <v-col
        v-for="character in characters"
        :key="character.name"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>{{ character.name }}</v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Height:</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ character.height }} cm</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Mass:</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ character.mass }} kg</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Birth Year:</v-list-item-title>
                  <v-list-item-subtitle>{{
                    character.birth_year
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-progress-circular
      v-else-if="isLoading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <v-alert v-else-if="error" type="error">{{ error }}</v-alert>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapGetters(["getCharacters", "isLoading", "getError"]),
    characters() {
      return this.getCharacters;
    },
    error() {
      return this.getError;
    },
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    ...mapActions(["fetchCharacters"]),
  },
};
</script>
