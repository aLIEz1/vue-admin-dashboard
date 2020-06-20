<template>
    <div class="container">
        <h2>Team</h2>
        <div class="cards">
            <transition appear
                        appear-active-class="animated flipInX">
                <a class="card"></a>
            </transition>
            <transition appear
                        appear-active-class="animated flipInX">
                <a class="card"></a>
            </transition>
            <transition appear
                        appear-active-class="animated flipInX">
                <a class="card"></a>
            </transition>
            <transition appear
                        appear-active-class="animated flipInX">
                <a class="card"></a>
            </transition>
            <transition appear
                        appear-active-class="animated flipInX">
                <a class="card"></a>
            </transition>
        </div>
    </div>

</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped lang="scss">
    .container {
        margin-left: 25px;
    }

    h2 {
        @include heading-2();
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: space-evenly;
    }

    .card {
        height: 50px;
        width: 50px;
        background: red;
        margin: 20px;
    }

</style>