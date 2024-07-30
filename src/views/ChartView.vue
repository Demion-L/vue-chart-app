<template>
  <v-app>
    <v-container>
      <h1 class="primary--text text-center my-5 shadowed-text">
        Sensor Data Visualization
      </h1>
      <sensor-selection @sensors-selected="updateSelectedSensors" />
      <chart-type-selection @chart-type-selected="updateChartType" />
      <chart-display :sensors="selectedSensors" :chartType="chartType" />
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
