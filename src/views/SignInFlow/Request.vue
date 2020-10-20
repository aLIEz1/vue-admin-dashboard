<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Request Account
      </h4>
      <div v-if="!successful">
        <form @submit.prevent="onSubmit">
          <input
            type="text"
            placeholder="Username"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="user.username"
            required
          />
          <input
            type="email"
            placeholder="Email"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="user.email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="user.password"
            required
          />
          <button>Sign up</button>
        </form>
        <router-link
          to="/signin"
          :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >
          Already have an account? Sign in now.
        </router-link>
      </div>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/models/user";

export default {
  name: "Request",
  components: {},
  data() {
    return {
      user: new User("", ""),
      successful: false,
      message: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    onSubmit() {
      this.message = "";
      this.$store.dispatch("auth/register", this.user).then(
        data => {
          this.message = data.message;
          this.successful = true;
          this.$router.push({
            name: "signin",
            params: {
              userRegisterAccount: true
            }
          });
        },
        error => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    }
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
