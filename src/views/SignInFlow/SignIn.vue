<template>
    <div class="container" :class="{'light-background':!isDarkMode,'dark-background':isDarkMode}">
        <div class="request">
            Don't have a Design+Code HQ account?
            <router-link to="/request">Request an account</router-link>
        </div>
        <div class="login">
            <img src="@/assets/DCHQ.svg"/>
            <h4>Sign in Design+Code HQ</h4>
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <button>Sign In</button>
            <router-link to="/recover">Forgot you password ?</router-link>
            <button @click="toggleDarkMode">Toggle</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        data() {
            return {
                isDarkMode: true
            }

        }
        ,
        methods: {
            toggleDarkMode() {
                this.isDarkMode = !this.isDarkMode;
                document.body.style.background = this.isDarkMode ? "#212c4f" : "#D3D3D3"
            }
        }
    }
</script>

<style scoped lang="scss">
    .light-background {
        background: $light-gray;

    }

    .dark-background {
        background: $dark-blue;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;

        min-height: 100vh;
    }

    .request {
        position: absolute;
        top: 40px;
        right: 40px;
        color: rgba(255, 255, 255, 0.3);

        a {
            color: white;
        }
    }

    .login {
        width: 400px;
    }

    h4 {
        margin: 0;
        line-height: 34px;
        font-size: 24px;
        text-align: center;
        color: #ffffff;
    }

    input {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        border-radius: 4px;
        height: 60px;
        width: 100%;
        font-size: 20px;
        color: #ffffff;
        padding-left: 20px;
        margin-top: 20px;

        &::placeholder {
            color: rgba(255, 255, 255, 0.3);
        }
    }

    button {
        background: #56CCF2;
        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        border: none;
        height: 60px;
        width: 100%;
        font-size: 20px;
        color: white;
        margin-top: 30px;
        margin-bottom: 40px;
    }

    a {
        font-size: 16px;
        text-align: center;
        color: rgba(255, 255, 255, 0.3);
        text-decoration: none;
    }
</style>