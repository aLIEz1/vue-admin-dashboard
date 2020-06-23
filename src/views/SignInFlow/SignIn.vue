<template>
    <div
            class="container"
            :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
    >
        <Notification v-show="hasText" :text="text"/>
        <RequestAccount/>
        <div class="login">
            <img src="@/assets/DCHQ.svg" v-show="isDarkMode"/>
            <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode"/>
            <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
                Sign in Design+Code HQ
            </h4>
            <form @submit.prevent="onSubmit">
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
    import {auth} from "../../main";
    import Notification from "../../components/Notification";
    // import * as netfliyIdentityWidget from "netlify-identity-widget";
    export default {
        components: {
            RequestAccount,
            ThemeSwitch,
            Notification
        },
        data() {
            return {
                email: null,
                password: null,
                hasText: false,
                text: '',
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
                // auth.login(email, password).then(response => {
                //     console.log("login success",JSON.stringify(response))
                // }).catch(error => {
                //     console.log(error)
                // })
                auth.login(email, password, true).then(response => {
                    console.log("login success  ", JSON.stringify(response))
                    setTimeout(()=>{
                        this.$router.replace("/");
                    },3000)

                }).catch(error => {
                    alert("Error: ", error)
                })


            }
        },
        mounted() {
                this.hasText = true;
                this.text = "Welcome!";
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
