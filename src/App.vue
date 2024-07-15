<template>
  <v-app>
    <div>
      <highcharts-component :chartOptions="chartOptions" chartId="myChart" />
    </div>
  </v-app>
</template>

<script>
import HighchartsComponent from "./components/HighchartsComponent.vue";

export default {
  name: "App",
  components: { HighchartsComponent },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
        },
        title: {
          text: "Fruit Consumption",
        },
        xAxis: {
          categories: ["Apples", "Bananas", "Oranges"],
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
