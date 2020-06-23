<template>
    <apexchart width="500" height="350" type="area" :options="chartOptions"
                :series="series"></apexchart>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: "MyCharts",
        components: {
            apexchart: VueApexCharts
        },
        data() {
            return {
                chartOptions: {
                    colors: ["#14f1d9", "#7b42f6"],
                    legend: {
                        labels: {
                            colors: [this.$store.getters.isDarkMode ? "white" : "black"]
                        },
                        position: "top"
                    },
                    tooltip: {
                        theme: "dark"
                    },
                    grid: {
                        xaxis: {
                            lines: {
                                show: true
                            }
                        },
                        yaxis: {
                            lines: {
                                show: false
                            }
                        }
                    },
                    chart: {
                        id: 'users'
                    },
                    xaxis: {
                        type: "datetime"
                    }
                },
                series: [
                    {
                        name: 'active users',
                        data: [[new Date("January 1, 2020"), 30], [new Date("January 5, 2020"), 40]]
                    },
                    {
                        name: 'new users',
                        data: [[new Date("January 1, 2020"), 80], [new Date("January 5, 2020"), 20]]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>