import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/core/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/core/AboutView.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("@/views/courses/CourseList.vue"),
    },
    {
      path: "/creators",
      name: "creators",
      component: () => import("@/views/creators/CreatorList.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/core/LoginView.vue"),
    },
  ],
});

export default router;
