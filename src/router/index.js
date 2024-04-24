import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/myads",
      name: "MyAds",
      component: () => import("../Views/myads/myads.vue")
    },
    {
      path: "/myads/:id",
      name: "adDetails",
      component: () => import("../Views/myads/adDetails.vue")
    },
    {
      path: "/myads/add",
      name: "AddAdv",
      component: () => import("../Views/ads/ads.vue")
    },
    {
      path: "/chats",
      name: "Chats",
      component: () => import("../Views/chats/Chat.vue")
    },
    {
      path: "/stateMnagment",
      name: "StateMnagment",
      component: () => import("../Views/stateManagment/stateManagment.vue")
    },
    {
      path: "/",
      name: "Login",
      component: () => import("../Views/login/login.vue")
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../Views/home/Home.vue")
    },
    {
      path: "/contracts",
      name: "Contracts",
      component: () => import("../Views/contracts/contracts.vue")
    },
    {
      path: "/FinantialManagment",
      name: "FinantialManameant",
      component: () => import("../Views/FinantialManagment/FinantialManagment.vue")
    },
    {
      path: "/decoration",
      name: "Decoration",
      component: () => import("../Views/decoration/Decoration.vue")
    },
    {
      path: "/decoration/:id",
      name: "DecorationDetails",
      component: () => import("../Views/decoration/DecorationDetails.vue")
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../Views/profile/profile.vue")
    },
    {
      path: "/packages",
      name: "Packages",
      component: () => import("../Views/packages/pakages.vue")
    },

  ]
})

export default router