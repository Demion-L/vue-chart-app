<template>
  <v-container>
    <h1 class="mb-4">Dashboard</h1>
    <selected-characters-list />
    <highcharts-component :chartOptions="chartOptions" chartId="myChart" />
  </v-container>
</template>

<script>
import SelectedCharactersList from "@/components/SelectedCharactersList.vue";
import HighchartsComponent from "@/components/HighchartsView.vue";

export default {
  name: "DashboardView",
  components: {
    SelectedCharactersList,
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
  getters: {
    getSelectedCharacters: (state) => state.getSelectedCharacters,
  },
};
</script>
