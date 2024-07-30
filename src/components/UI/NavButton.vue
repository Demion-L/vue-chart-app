<template lang="">
  <v-btn
    :text="true"
    :to="to"
    @click="onClick"
    :class="{ 'mr-2': marginRight }"
  >
    <span>{{ text }}</span>
    <v-icon v-if="icon" right :color="iconColor">{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    iconColor: {
      type: String,
      default: "primary",
    },
    marginRight: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang=""></style>
