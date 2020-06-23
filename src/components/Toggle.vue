<template>
    <div class="spread">
        <h1 :class="{'dark':!isDarkMode,'light':isDarkMode}">Traffic Overview</h1>
        <div class="toggle" :class="{'light-box':isDarkMode,'dark-box':!isDarkMode}">
            <div ref="days" class="days" @click="toggleDays">Days</div>
            <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
            <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Toggle",
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode
            }
        },
        methods: {
            toggleDays() {
                this.$refs.days.style.color = "white";
                this.$refs.days.style.background = "#56ccf2";
                this.$refs.days.style.borderRadius = "4px";

                this.$refs.weeks.style.color = "#5b6175";
                this.$refs.weeks.style.background = "none";
                this.$refs.weeks.style.borderRadius = "none";

                this.$refs.months.style.color = "#5b6175";
                this.$refs.months.style.background = "none";
                this.$refs.months.style.borderRadius = "none";
            },
            toggleWeeks() {
                this.$refs.weeks.style.color = "white";
                this.$refs.weeks.style.background = "#56ccf2";
                this.$refs.weeks.style.borderRadius = "4px";

                this.$refs.months.style.color = "#5b6175";
                this.$refs.months.style.background = "none";
                this.$refs.months.style.borderRadius = "none";

                this.$refs.days.style.color = "#5b6175";
                this.$refs.days.style.background = "none";
                this.$refs.days.style.borderRadius = "none";

            },
            toggleMonths() {
                this.$refs.months.style.color = "white";
                this.$refs.months.style.background = "#56ccf2";
                this.$refs.months.style.borderRadius = "4px";

                this.$refs.weeks.style.color = "#5b6175";
                this.$refs.weeks.style.background = "none";
                this.$refs.weeks.style.borderRadius = "none";

                this.$refs.days.style.color = "#5b6175";
                this.$refs.days.style.background = "none";
                this.$refs.days.style.borderRadius = "none";
            },
        }
    }
</script>

<style scoped lang="scss">
    .spread {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        width: 100%;
    }
    .toggle {
        @include medium-text;
        color: $dark-gray;
        height: 50px;
        width: 240px;
        border-radius: 6px;
        padding: 5px;
        display: flex;
        flex-wrap: nowrap;


        &:hover {
            cursor: pointer;
        }
    }

    @mixin toggle-settings {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33.33%;
        height: 100%;
    }

    .days {
        @include toggle-settings;
        background: $teal;
        border-radius: 4px;
        color: $white;
    }

    .weeks {
        @include toggle-settings;
    }

    .months {
        @include toggle-settings;
    }
    h1.dark {
        @include heading-3;
        color: black;
    }

    h1.light {
        @include heading-3;
        color: white;
    }

</style>