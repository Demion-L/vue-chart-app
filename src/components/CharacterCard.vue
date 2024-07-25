<template>
  <v-card
    :class="{
      info: isSelected,
      'primary--text': isSelected,
      'shadowed-text': isSelected,
    }"
    @click="$emit('click')"
  >
    <v-card-title>{{ character.name }}</v-card-title>
    <v-card-text>
      <v-list dense :class="{ info: isSelected }">
        <template v-for="(detail, index) in characterDetails">
          <v-list-item
            :class="{
              info: isSelected,
              'primary--text': isSelected,
              'shadowed-text': isSelected,
            }"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title
                :class="{
                  info: isSelected,
                  'primary--text': isSelected,
                  'shadowed-text': isSelected,
                }"
              >
                {{ detail.title }}
              </v-list-item-title>
              <v-list-item-subtitle
                :class="{
                  info: isSelected,
                  'primary--text': isSelected,
                  'shadowed-text': isSelected,
                }"
              >
                {{ detail.value }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CharacterCard",
  data() {
    return {
      characterDetails: [
        { title: "Height", value: `${this.character.height} cm` },
        { title: "Mass", value: `${this.character.mass} kg` },
        { title: "Birth Year", value: `${this.character.birth_year}` },
      ],
    };
  },
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

<style scoped>
.shadowed-text {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
