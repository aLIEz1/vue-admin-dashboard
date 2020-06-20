import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignInFlow/SignIn";
import Request from "../views/SignInFlow/Request";
import Recover from "../views/SignInFlow/Recover";
import Team from "../views/Team";
import * as netfliyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta:{
            requiresAuth:true
        }
    },
    {
        path: "/team",
        name: "team",
        component: Team,
        meta:{
            requireAuth:true
        }
    },
    {
        path: "/signin",
        name: "signin",
        component: SignIn
    },
    {
        path: "/request",
        name: "request",
        component: Request
    },
    {
        path: "/recover",
        name: "recover",
        component: Recover
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
router.beforeEach(
    (to,from,next) => {
        const currentUser=netfliyIdentityWidget.currentUser();
        const requiresAuth=to.matched.some(record=>{
            return record.meta.requiresAuth
        })
        if (requiresAuth && !currentUser){
            next("signin");
        }else {
            next();
        }
})

export default router;
