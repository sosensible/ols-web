<script setup lang="ts">
import { useCourseStore } from "@/stores/CourseStore";

const courseStore = useCourseStore();

function addCourse() {
  courseStore.importCourse();
}
</script>

<template>
  <h1>Course List</h1>
  <ul>
    <li v-for="item in courseStore.courseList" key="uuid">
      Title:
      <router-link :to="{ name: 'course', params: { id: item.id } }">{{
        item.title
      }}</router-link>
      <br />
      Details: {{ item.details }}<br />
    </li>
  </ul>
  <hr />
  <button @click="addCourse()">Add Course</button>
</template>
