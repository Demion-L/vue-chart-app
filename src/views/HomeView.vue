<template>
  <v-card v-if="character" max-width="400" class="mx-auto">
    <v-card-title>{{ character.name }}</v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Height:</v-list-item-title>
            <v-list-item-subtitle>{{ character.height }} cm</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Mass:</v-list-item-title>
            <v-list-item-subtitle>{{ character.mass }} kg</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Birth Year:</v-list-item-title>
            <v-list-item-subtitle>{{ character.birth_year }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
  <v-progress-circular v-else-if="isLoading" indeterminate color="primary"></v-progress-circular>
  <v-alert v-else-if="error" type="error">{{ error }}</v-alert>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    ...mapGetters(['getCharacter', 'isLoading', 'getError']),
    character() {
      return this.getCharacter
    },
    error() {
      return this.getError
    }
  },
  mounted() {
    this.fetchCharacter()
  },
  methods: {
    ...mapActions(['fetchCharacter'])
  }
}
</script>
