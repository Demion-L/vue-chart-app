<template>
  <div class="fill-height">
    <v-card
      v-if="isLoading"
      class="fill-height d-flex align-center justify-center my-4 py-16"
    >
      <v-progress-circular
        indeterminate
        color="secondary"
      ></v-progress-circular>
    </v-card>
    <v-alert v-else-if="error" type="error">{{ error }}</v-alert>
    <v-alert v-else-if="isEmpty" type="info">
      {{ emptyMessage }}
    </v-alert>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "LoadingErrorHandler",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: ",",
    },
    isEmpty: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
