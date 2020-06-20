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
                Sign in Design+Code HQ
            </h4>
            <form @submit="onSubmit">
                <input
                        type="email"
                        placeholder="Email"
                        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
                        v-model="email"
                        required
                />
                <input
                        type="password"
                        placeholder="Password"
                        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
                        v-model="password"
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
            <ThemeSwitch/>
        </div>
    </div>
</template>

<script>
    import RequestAccount from "../../components/RequestAccount";
    import ThemeSwitch from "../../components/ThemeSwitch";
    import { auth } from "../../main";
    // import * as netfliyIdentityWidget from "netlify-identity-widget";
    export default {
        components: {
            RequestAccount,
            ThemeSwitch
        },
        data() {
            return {
                email: null,
                password: null
            }
        },
        name: "SignIn",
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode;
            }
        },
        methods: {
            onSubmit() {
                const email = this.email;
                const password = this.password;
                auth.login(email, password,true).then(response => {
                    this.$router.replace("/");
                }).catch(error => {
                    alert("Error: ", error)
                })

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
