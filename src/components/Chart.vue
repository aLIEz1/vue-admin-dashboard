<template>
    <div class="charts">
        <a class="chart" :class="{'light-chart':!isDarkMode,'dark-chart':isDarkMode}">
            <MyCharts/>
        </a>
        <a class="chart" :class="{'light-chart':!isDarkMode,'dark-chart':isDarkMode}">
            <RadialBarExample/>
        </a>
        <a class="chart" :class="{'light-chart':!isDarkMode,'dark-chart':isDarkMode}">
            <ScatterExample/>
        </a>
        <a class="chart" :class="{'light-chart':!isDarkMode,'dark-chart':isDarkMode}">
            <MixedExample/>
        </a>
    </div>
</template>

<script>
    import MixedExample from "../components/charts/MixedExample";
    import RadialBarExample from "../components/charts/RadialBarExample";
    import ScatterExample from "../components/charts/ScatterExample";
    import MyCharts from "../components/charts/MyCharts";
    import Header from "./Header";
    export default {
        name: "Chart",
        components: {
            Header,
            MixedExample,
            RadialBarExample,
            ScatterExample,
            MyCharts,
        },
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode
            }
        },
    }
</script>

<style scoped lang="scss">
    .charts {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: space-evenly;
    }

    .chart {
        display: flex;
        width: 100%;
        max-width: 600px;
        height: 400px;
        border-radius: 10px;
        margin: 20px;
        justify-content: center;
        align-items: center;
    }

    .light-chart {
        background: $white;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    &:hover {
         box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
     }
    }

    .dark-chart {
        background: $super-dark-blue;
        box-shadow: 0 20px 40px rgba(225, 225, 225, 0.15);

    &:hover {
         box-shadow: 0 30px 60px rgba(255, 255, 255, 0.35);
     }

    }
</style>