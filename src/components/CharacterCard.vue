<template>
  <v-card :class="{ lime: isSelected }" @click="$emit('click')">
    <v-card-title>{{ character.name }}</v-card-title>
    <v-card-text>
      <v-list dense :class="{ lime: isSelected }">
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
            <v-list-item-subtitle>{{ character.mass }} kg</v-list-item-subtitle>
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
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
