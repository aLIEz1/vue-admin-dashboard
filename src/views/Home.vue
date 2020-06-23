<template>
    <div class="home">
        <Header/>
        <div class="btn">
            <ThemeSwitch/>
        </div>
        <div class="container">
            <Toggle/>
            <Chart/>
        </div>

    </div>
</template>

<script>
    import Header from "../components/Header";
    import Chart from "../components/Chart";
    import Toggle from "../components/Toggle";
    import ThemeSwitch from "../components/ThemeSwitch";

    export default {
        name: "Home",
        components: {
            ThemeSwitch,
            Header,
            Chart,
            Toggle
        }
    };
</script>
<style scoped lang="scss">
    .container {
        padding-left: 15%;
        padding-right: 15%;
    }
    .btn{
        position: absolute;
        margin-left: 840px;
    }
</style>