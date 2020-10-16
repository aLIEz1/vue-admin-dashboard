<template>
  <div
      class="container"
      :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount/>
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode"/>
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode"/>
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Recover Account
      </h4>
      <form @submit.prevent="onSubmit">
        <input
            type="email"
            placeholder="Email"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="user.email"
            required
        />
        <button>Send Email</button>
      </form>
      <router-link
          to="/signin"
          :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
      >
        Already have an account? Sign in now.
      </router-link>
    </div>
  </div>
</template>

<script>
import RequestAccount from "../../components/RequestAccount";
import User from "@/models/user";

export default {
  components: {
    RequestAccount,
  },
  data() {
    return {
      user: new User('', ''),
    }
  },
  name: "Recover",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    onSubmit() {
      if (this.user.email) {
        this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/')
            }
        )
      }
    }
  },
  mounted() {
  }

};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  min-height: 100vh;
}


.light-recover {
}

.dark-recover {
}

.login {
  width: 400px;
}

</style>
