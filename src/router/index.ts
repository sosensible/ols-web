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
      path: "/courses/:id",
      name: "course",
      props: true,
      component: () => import("@/views/courses/CourseView.vue"),
    },
    {
      path: "/courses/:course_id/unit/:unit_id",
      name: "course_unit",
      props: true,
      component: () => import("@/views/courses/UnitView.vue"),
    },
    {
      path: "/courses/:course_id/unit/:unit_id/lessons/:lesson_id",
      name: "course_lesson",
      props: true,
      component: () => import("@/views/courses/CourseList.vue"),
    },
    {
      path: "/creators",
      name: "creators",
      component: () => import("@/views/creators/CreatorList.vue"),
    },
    {
      path: "/creators/:id",
      name: "creator",
      props: true,
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
