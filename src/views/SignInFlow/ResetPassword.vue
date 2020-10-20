<template>
  <div
      class="container"
      :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode"/>
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode"/>
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Reset Password
      </h4>
      <form @submit.prevent="onSubmit">
        <input
            type="text"
            placeholder="Password"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="reset.password"
            required
        />
        <input
            type="text"
            placeholder="Confirm Password"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="reset.confirmPassword"
            required
        />
        <button>Reset Password</button>
      </form>
    </div>
  </div>
</template>

<script>
import ResetPassword from "@/models/resetPassword";
import axios from "axios";
import getUrlKey from "@/utils/getUrlKey";
export default {
  components: {
  },
  data() {
    return {
      reset:new ResetPassword('','','')
    };
  },
  name: "ResetPassword",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      if (this.reset.password===this.reset.confirmPassword) {
        axios.post("http://localhost:8082/api/auth/reset",{
          password:this.reset.password,
          confirmPassword:this.reset.confirmPassword,
          token:getUrlKey.getUrlKey("token")
        }).then(response=>{
          this.$router.push({
            name: "signin",
            params: {
              userAlreadyResetPassword: true
            }
          });
        })
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
