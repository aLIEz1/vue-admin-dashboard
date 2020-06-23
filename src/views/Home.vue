<template>
    <div class="home">
        <Header/>
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

    export default {
        name: "Home",
        components: {
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
</style>