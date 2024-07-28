<template>
  <v-card>
    <v-card-title>Select Chart Type</v-card-title>
    <v-card-text>
      <v-radio-group v-model="selectedChartType" @change="applySelection">
        <v-radio label="Line Chart" value="line"></v-radio>
        <v-radio label="Bar Chart" value="bar"></v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ChartTypeSelection",
  data() {
    return {
      selectedChartType: "line",
    };
  },
  methods: {
    applySelection() {
      this.$emit("chart-type-selected", this.selectedChartType);
    },
  },
};
</script>
