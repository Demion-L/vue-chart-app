<template>
  <v-container class="custom-background">
    <h2 class="primary--text shadowed-text">Character Comparison</h2>
    <v-row class="mb-4">
      <v-col cols="6">
        <v-select
          v-model="chartType"
          :items="chartTypes"
          label="Chart Type"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-color-picker
          v-model="massColor"
          hide-mode-switch
          hide-inputs
          label="Mass Color"
        ></v-color-picker>
      </v-col>
      <v-col cols="3">
        <v-color-picker
          v-model="heightColor"
          hide-mode-switch
          hide-inputs
          label="Height Color"
        ></v-color-picker>
      </v-col>
    </v-row>
    <highcharts-view
      ref="highchartsView"
      :chartOptions="chartOptions"
      chartId="character-comparison"
    />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import HighchartsView from "./HighchartsView.vue";
export default {
  name: "CharacterComparisonChart",
  components: {
    HighchartsView,
  },
  data() {
    return {
      chartType: "bar",
      chartTypes: ["bar", "line"],
      massColor: "#7cb5ec",
      heightColor: "#434348",
    };
  },
  computed: {
    ...mapGetters(["getSelectedCharacters"]),
    chartOptions() {
      const characters = this.getSelectedCharacters;
      return {
        chart: {
          type: this.chartType,
        },
        title: {
          text: "Character Comparison",
        },
        xAxis: {
          categories: characters.map((char) => char.name),
          title: {
            text: "Characters",
          },
        },
        yAxis: [
          {
            title: {
              text: "Mass (kg)",
            },
          },
          {
            title: {
              text: "Height (cm)",
            },
            opposite: true,
          },
        ],
        series: [
          {
            name: "Mass",
            data: characters.map((char) => parseFloat(char.mass) || 0),
            yAxis: 0,
            color: this.massColor,
          },
          {
            name: "Height",
            data: characters.map((char) => parseFloat(char.height) || 0),
            yAxis: 1,
            color: this.heightColor,
          },
        ],
        tooltip: {
          shared: true,
        },
      };
    },
  },
  methods: {
    updateChart() {
      if (this.$refs.highchartsView && this.$refs.highchartsView.chart) {
        const chart = this.$refs.highchartsView.chart;
        chart.series[0].update({ color: this.massColor });
        chart.series[1].update({ color: this.heightColor });
      }
    },
  },
  watch: {
    chartType() {
      this.$nextTick(this.updateChart);
    },
  },
};
</script>
