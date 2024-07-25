<template>
  <v-row justify="center" v-if="totalPages > 1">
    <v-col cols="auto">
      <v-pagination
        v-model="localCurrentPage"
        :length="totalPages"
        @input="onPageChange"
        :total-visible="7"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PaginationControl",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      localCurrentPage: this.currentPage,
    };
  },
  watch: {
    currentPage(newValue) {
      this.localCurrentPage = newValue;
    },
  },
  methods: {
    onPageChange(page) {
      this.$emit("page-change", page);
    },
  },
};
</script>
