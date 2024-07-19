<template>
  <v-container>
    <highcharts-component :chartOptions="chartOptions" chartId="myChart" />
  </v-container>
</template>

<script>
import HighchartsComponent from "@/components/HighchartsView.vue";

export default {
  name: "DashboardView",
  components: {
    HighchartsComponent,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
        },
        title: {
          text: "Comparison of character data",
        },
        xAxis: {
          categories: ["Height", "Mass", "Birth Year"],
        },
        yAxis: {
          title: {
            text: "Fruit eaten",
          },
        },
        series: [
          {
            name: "Jane",
            data: [1, 0, 4],
          },
          {
            name: "John",
            data: [5, 7, 3],
          },
        ],
      },
    };
  },
};
</script>
