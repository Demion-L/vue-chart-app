<!-- ChartDisplay.vue -->
<template>
  <v-card class="custom-background">
    <v-card-title class="primary--text text-center my-5 shadowed-text"
      >Sensor Data Chart</v-card-title
    >
    <v-card-text>
      <div id="chart"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import Highcharts from "highcharts";

export default {
  name: "ChartDisplay",
  props: {
    sensors: Array,
    chartType: String,
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    sensors: "updateChart",
    chartType: "updateChart",
  },
  methods: {
    updateChart() {
      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = Highcharts.chart("chart", {
        chart: {
          type: this.chartType,
        },
        title: {
          text: "Sensor Data",
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yAxis: {
          title: {
            text: "Value",
          },
        },
        series: this.sensors.map((sensor) => ({
          name: sensor.name,
          data: this.generateRandomData(),
        })),
      });
    },
    generateRandomData() {
      return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
    },
  },
  mounted() {
    this.updateChart();
  },
};
</script>
