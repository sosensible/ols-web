<script setup lang="ts">
import { useCourseStore } from "@/stores/CourseStore";

const course = useCourseStore();

function addCourse() {
  course.importCourse();
}
</script>

<template>
  <h1>Course List</h1>
  <ul>
    <li v-for="item in course.courseList" key="uuid">
      {{ item.title }}<br />
      {{ item.details }}<br />
      {{ item.version }},{{ item.iteration }},{{ item.state }}<br />
      <ul>
        <li>I:</li>
      </ul>
      <ul>
        <li>U:</li>
      </ul>
    </li>
  </ul>
  <hr />
  <button @click="addCourse()">Add Course</button>
</template>
