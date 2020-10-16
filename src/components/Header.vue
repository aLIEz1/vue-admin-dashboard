<template>
    <div id="nav" :class="{'nav-light':!isDarkMode,'dark-nav':isDarkMode}">
        <div class="nav-1">
            <img v-show="!isDarkMode" src="@/assets/DCHQ-small-light.svg"/>
            <img v-show="isDarkMode" src="@/assets/DCHQ-small-dark.svg"/>
            <router-link to="/" :class="{'light-nav':!isDarkMode
            ,'dark-nav':isDarkMode}">Home
            </router-link>
            <router-link to="/manage" :class="{'light-nav':!isDarkMode
            ,'dark-nav':isDarkMode}">Manage Users
            </router-link>
            <router-link to="/team" :class="{'light-nav':!isDarkMode
            ,'dark-nav':isDarkMode}">Team
            </router-link>
        </div>
        <a @click="onClick" class="logout">
            Logout
            <img src="@/assets/log-in.svg"/>
        </a>
    </div>
</template>

<script>
    import {auth} from "../main"

    export default {
        name: "Header",
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode
            }
        },
        methods: {
            onClick() {
              this.$store.dispatch('auth/logout');
              this.$router.push({
                name: "signin",
                params:{
                  userLogoutAccount: true
                }
              });
            }
        }

    };
</script>

<style scoped lang="scss">
    .nav-light {
        background: $white;
    }

    .nav-dark {
        background: $super-dark-blue;
    }

    #nav {
        padding: 15px 15%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        width: 100%;

        a {
            font-weight: bold;
            color: $dark-gray;

            &.router-link-exact-active.dark-nav {
                color: $white;
            }

            &.router-link-exact-active.light-nav {
                color: $middle-blue;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }

    .nav-1 {
        display: flex;
        align-items: center;

        a {
            margin-left: 20px;
            margin-right: 20px;
        }

        img {
            margin-right: 20px;
        }
    }

    .logout {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
