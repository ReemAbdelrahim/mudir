import {createRouter , createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "Home",
        component: () => import("../Views/home/Home.vue")
      },      
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
      }
      , {
        path: "/chats",
        name: "Chats",
        component: () => import("../Views/chats/Chat.vue")
      }
      
    ]
  })

export default router