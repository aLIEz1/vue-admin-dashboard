<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <Notification v-show="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign in
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="text"
          placeholder="Username"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="user.username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="user.password"
          required
        />
        <button>Sign In</button>
      </form>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
      >
        Forgot you password ?
      </router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "../../components/RequestAccount";
import ThemeSwitch from "../../components/ThemeSwitch";
import Notification from "../../components/Notification";
import User from "@/models/user";

export default {
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  data() {
    return {
      user: new User("", ""),
      hasText: false,
      text: ""
    };
  },
  name: "SignIn",
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
      this.$router.push("/");
    }
  },
  methods: {
    onSubmit() {
      if (this.user.username && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(() => {
          this.$router.push({
            name: "Home",
            params: {
              userLoginAccount: true,
              username: this.user.username
            }
          });
        });
      }
    }
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLogoutAccount) {
      this.hasText = true;
      this.text = "You have logged out!";
    } else if (params.userRegisterAccount) {
      this.hasText = true;
      this.text = "Registration successful, please login";
    }else if (params.userResetPassword){
      this.hasText=true;
      this.text="an email has been send to your mailbox";
    }else if (params.userAlreadyResetPassword){
      this.hasText=true;
      this.text="You have reset your password. Please login";
    }
      else {
      this.hasText = false;
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
