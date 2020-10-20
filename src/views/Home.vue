<template>
  <div class="home">
    <Header />
    <div class="container">
      <Notification v-show="hasText" :text="text" />
      <Toggle />
      <Chart />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Chart from "../components/Chart";
import Toggle from "../components/Toggle";
import Notification from "@/components/Notification";

export default {
  name: "Home",
  components: {
    Header,
    Chart,
    Toggle,
    Notification
  },
  data() {
    return {
      hasText: false,
      text: ""
    };
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoginAccount) {
      this.hasText = true;
      this.text = "Welcome! " + params.username;
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  padding-left: 15%;
  padding-right: 15%;
}

.btn {
  position: absolute;
  margin-left: 840px;
}
</style>
