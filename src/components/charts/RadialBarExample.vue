<template>
  <div class="example">
    <apexchart
      width="350"
      type="radialBar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "RadialBarExample",
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        labels: ["Percent"]
      },
      series: [81]
    };
  }
};
</script>
