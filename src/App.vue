<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    // import "animate.css";

    export default {
        name: "App",
        mounted() {
            const isDarkMode = this.$store.getters.isDarkMode;
            document.body.style.background = isDarkMode ? "#212c4f" : "#D3D3D3";
            const link = document.createElement('link')
            link.type = 'text/css'
            link.rel = 'stylesheet'
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.compat.css'
            document.head.appendChild(link)
        }
    };
</script>
<style lang="scss">
    * {
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    body {
        background: $dark-blue;
    }

    h1 {
        @include heading-1;
    }

    p {
        @include large-text-bold($purple);
    }

    #app {
        font-family: $system-font-family;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: $white;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    /*
    Theme
     */
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
        background: #56ccf2;
        box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
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
        text-decoration: none;
    }

    .light-background {
        background: $light-gray;
    }

    .dark-background {
        background: $dark-blue;
    }

    .light-text {
        color: $white;
    }

    .dark-text {
        color: $black;
    }

    .light-field {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);

        &::placeholder {
            color: rgba(198, 208, 235, 0.3);
        }
    }

    .dark-field {
        background: rgba(198, 208, 235, 0.2);
        border: 1px solid rgba(0, 0, 0, 0.2);

        &::placeholder {
            color: rgba(0, 0, 0, 0.3);
        }
    }

    .light-link {
        color: rgba(255, 255, 255, 0.3);
    }

    .dark-link {
        color: rgba(0, 0, 0, 0.3);
    }

</style>
