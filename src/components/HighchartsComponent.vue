vueCopy
<template>
  <div :id="chartId"></div>
</template>

<script>
import Highcharts from "highcharts";

export default {
  props: {
    chartOptions: {
      type: Object,
      required: true,
    },
    chartId: {
      type: String,
      default: "highcharts",
    },
  },
  mounted() {
    this.chart = Highcharts.chart(this.chartId, this.chartOptions);
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>
