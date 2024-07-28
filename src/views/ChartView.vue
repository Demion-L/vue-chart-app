<template>
  <v-app>
    <v-container>
      <h1>Sensor Data Visualization</h1>
      <sensor-selection
        @sensors-selected="updateSelectedSensors"
      ></sensor-selection>
      <chart-type-selection
        @chart-type-selected="updateChartType"
      ></chart-type-selection>
      <chart-display
        :sensors="selectedSensors"
        :chartType="chartType"
      ></chart-display>
    </v-container>
  </v-app>
</template>

<script>
import SensorSelection from "@/components/SensorSelection.vue";
import ChartTypeSelection from "@/components/ChartTypeSelection.vue";
import ChartDisplay from "@/components/ChartDisplay.vue";

export default {
  name: "ChartView",
  components: {
    SensorSelection,
    ChartTypeSelection,
    ChartDisplay,
  },
  data() {
    return {
      selectedSensors: [],
      chartType: "line",
    };
  },
  methods: {
    updateSelectedSensors(sensors) {
      this.selectedSensors = sensors;
    },
    updateChartType(type) {
      this.chartType = type;
    },
  },
};
</script>
